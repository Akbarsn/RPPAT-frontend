import React, { useState, Fragment } from "react";
import { Alert, Form, Input, Button } from "antd";
import jwt from "jsonwebtoken";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import API from "../API";

export default function Login(props) {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    if (uname && password) {
      let user = {
        username: uname,
        password: password,
      };
      try {
        let hasil = await API.post("/auth/login", user);

        console.log(hasil);

        var decoded = jwt.decode(hasil.data.data);
        console.log(decoded);
        localStorage.setItem("token", hasil.data.data);
        localStorage.setItem("role", decoded.role);
        localStorage.setItem("id", decoded.id);
        localStorage.setItem("name", hasil.data.user.name.split(" ")[0]);

        Redirect(hasil.data.data);
      } catch (e) {
        switch (e.response) {
          case 406:
            setError("Username atau Password Salah");
            setVisible(true);
            break;
          case 500:
            console.log("status:" + e.reponse.message);
            break;
          default:
            console.log("berhasil");
            break;
        }
      }
    }
    setLoading(false);
  }
  const handleClose = () => {
    setVisible(false);
  };

  const Redirect = (token) => {
    const decoded = jwt.decode(token);

    switch (decoded.role) {
      case 0:
        window.location.replace("/petani");
        break;
      case 1:
        window.location.replace("/pemasok-kemasan");
        break;
      case 2:
        window.location.replace("/pemasok-bahan-tambahan");
        break;
      case 3:
        window.location.replace("/umkm");
        break;
      case 4:
        window.location.replace("/outlet");
        break;
    }
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      {localStorage.getItem("token") ? (
        Redirect(localStorage.getItem("token"))
      ) : (
        <div className="login">
          <div className="cardlogin">
            <p className="titlelogin">Masuk</p>

            <div className="kasir">
              Anda Kasir ?&nbsp;
              <Link to="/kasir/login" style={{ color: "#1dc6c6" }}>
                Masuk
              </Link>
            </div>

            <Form {...layout} name="basic">
              {visible ? (
                <Alert
                  message={error}
                  type="error"
                  showIcon
                  closable
                  onClose={handleClose}
                  style={{ margin: "1.5rem" }}
                />
              ) : (
                <Fragment />
              )}
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Tolong masukkan username anda!" },
                ]}
              >
                <Input onChange={(data) => setUname(data.target.value)} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Tolong masukkan password anda!" },
                ]}
              >
                <Input.Password
                  onChange={(data) => setPassword(data.target.value)}
                />
              </Form.Item>
              <div className="buttonlogin">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="btn_primary"
                  onClick={(e) => {
                    submit(e);
                  }}
                  loading={loading}
                >
                  Submit
                </Button>
              </div>
            </Form>
            <p className="keregister">
              Tidak memiliki akun ?{" "}
              <Link to="/register" style={{ color: "#1dc6c6" }}>
                Register Sekarang
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
