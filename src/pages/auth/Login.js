import React, { useState, Fragment } from "react";
import Container from "../../components/inc/Container";
import { Alert, Form, Input } from "antd";
import Button from "../../components/inc/Button";
import "./Login.scss";
import axios from 'axios';

export default function Login() {
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
        password: password
      };
      console.log(user);
      try {
        // let hasil = await axios.post("/auth/login", user);
        //localStorage.setItem("token", hasil.data.token);
        //window.location.replace("/dashboard");
      } catch (e) {
        switch (e.response.status) {
          case 406:
            setError("Email atau Password Salah");
            break;
          case 500:
            console.log(e.message);
            break;
          default:
            console.log("berhasil");
            break;
        }
      }
    }
    setError("Email atau Password Salah");
    setVisible(true);
    setLoading(false);
  }
    const handleClose = () => {
      setVisible(false);
    };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <Container>
        <div className="cardlogin">
          <p className="titlelogin">Masuk</p>
          
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
          {visible ? (
            <Alert
            message={error}
              type="error"
              showIcon
              closable
              onClose={handleClose}
              style={{margin:"1.5rem"}}
            />
          ) : (
            <Fragment />
          )}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Tolong masukkan username anda!" }
              ]}
            >
              <Input onChange={data => setUname(data.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Tolong masukkan password anda!" }
              ]}
            >
              <Input.Password
                onChange={data => setPassword(data.target.value)}
              />
            </Form.Item>
            <div className="buttonlogin">
              <Button
                type="primary"
                text={loading ? "Loading..." : "Kirim"}
                {...tailLayout}
                click={e => submit(e)}
              />
            </div>
          </Form>
          <p className="keregister">
            Tidak memiliki akun ?{" "}
            <a className="link" href="/register" style={{ color: "#1DC6C6" }}>
              Register Sekarang
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
