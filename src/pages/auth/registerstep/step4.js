import React, {useState} from "react";
import { Form, Input, Row, Col, Button } from "antd";

export default function Step4(props) {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <div className="step2">
      <Form
        {...layout}
        onFinish={props.onFinishStep4}
        initialValues={props.data}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Tolong masukkan username anda!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Tolong masukkan password anda!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="buttonGroup">
          <Row justify="space-between">
            {/* Back Button */}
            <Row justify="start">
              <Col>
                <Button
                  className="btn_tertiary"
                  size="large"
                  onClick={props.handleBack}
                >
                  Kembali
                </Button>
              </Col>
            </Row>

            {/* Next Button */}
            <Row justify="end">
              <Col>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="btn_primary"
                  loading = {props.loading}
                >
                  Kirim
                </Button>
              </Col>
            </Row>
          </Row>
        </div>
      </Form>
    </div>
  );
}
