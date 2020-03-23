import React from "react";
import { Form, Input } from "antd";

export default function Step4(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  return (
    <div className="step4">
      <Form>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Tolong masukkan username anda!" }
          ]}
        >
          <Input onChange={data=>{props.username(data.target.value)}} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Tolong masukkan password anda!" }
          ]}
        >
          <Input.Password onChange={data=>{props.password(data.target.value);}} />
        </Form.Item>
      </Form>
    </div>
  );
}
