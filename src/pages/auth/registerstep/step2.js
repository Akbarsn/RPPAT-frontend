import React from "react";
import { Form, Input, DatePicker, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./step2.scss";

export default function Step2(props) {
  const dateFormat = "YYYY-MM-DD";

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
        onFinish={props.onFinishStep2}
        initialValues={props.data}
      >
        <Form.Item
          label="Nama Lengkap"
          name="fullName"
          rules={[
            { required: true, message: "Tolong masukkan nama lengkap anda !" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Tolong masukkan email anda !" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Alamat"
          name="address"
          rules={[{ required: true, message: "Tolong masukkan alamat anda !" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Nomor HP"
          name="phoneNumber"
          rules={[{ required: true, message: "Tolong masukkan nomor anda !" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tanggal Lahir"
          name="birthDate"
          rules={[
            { required: true, message: "Tolong masukkan tanggal lahir anda !" },
          ]}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload Foto KTP"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Tolong upload KTP anda !" }]}
          extra="Pastikan file dalam format .pdf, .png, atau .jpeg"
        >
          <Upload name="logo" listType="picture" accept=".pdf,.png,.jpeg">
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
                >
                  Selanjutnya
                </Button>
              </Col>
            </Row>
          </Row>
        </div>
      </Form>
    </div>
  );
}
