import React from "react";
import { Form, Input, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Step4(props) {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
        <Form.Item
          name="fotoprofil"
          label="Upload Foto Profil"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Tolong upload foto profil anda !" }]}
          extra="Pastikan file dalam format .png atau .jpeg"
        >
          <Upload name="logo" listType="picture" accept=".png,.jpeg">
            <Button>
              <UploadOutlined /> Klik untuk Upload
            </Button>
          </Upload>
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
