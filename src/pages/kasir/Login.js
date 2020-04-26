import React, { useState, Fragment } from "react";
import { Alert, Form, Input, Button } from "antd";
import jwt from "jsonwebtoken";
import "./Login.scss";
import API from "../API";

export default function Login(props) {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    if (uname && password) {
      let user = {
        username: uname,
        password: password,
      };
      console.log(user);
      try {
        let hasil = await API.post("/kasir/login", user);
        var decoded = jwt.decode(hasil.data.token);
        console.log(decoded);
        localStorage.setItem("token", hasil.data.token);
        localStorage.setItem("name", hasil.data.data.fullName.split(" ")[0]);
        localStorage.setItem("outletId", decoded.outletId);
        window.location.replace("/kasir");
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

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  return (
    <div className="login">
      <div className="cardlogin">
        <p className="titlelogin">Masuk</p>

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
              style={{ marginBottom: "2rem" }}
              onClick={(e) => {
                submit(e);
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
