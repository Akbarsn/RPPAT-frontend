import React from "react";
import { Form, Input } from "antd";

export default function Step4(props) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };

  return (
    <div className="step2">
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }} 
      style={{fontFamily:"Roboto"}}
    >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Tolong masukkan username anda!" }
          ]}
        >
          <Input onChange={data=>{props.uname(data.target.value)}} defaultValue={props.datauname}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Tolong masukkan password anda!" }
          ]}
        >
          <Input.Password onChange={data=>{props.pass(data.target.value);}} defaultValue={props.datapass}/>
        </Form.Item>
      </Form>
    </div>
  );
}
