import React from "react";
import { Radio, Form, Row, Col, Button } from "antd";
import "./step1.scss";

export default function Step1(props) {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  return (
    <div className="step1">
      <p className="step1title">Anda Ingin Daftar Sebagai Apa ?</p>
      <Form
        {...layout}
        onFinish={props.onFinishStep1}
        initialValues={props.data}
      >
        <Form.Item
          name="role"
          rules={[
            {
              required: true,
              message: "Tolong pilih salah satu dari pekerjaan diatas",
            },
          ]}
        >
          <Radio.Group style={{ fontWeight: "650" }}>
            <Radio style={radioStyle} value={1}>
              Petani Apel
            </Radio>
            <Radio style={radioStyle} value={2}>
              Pemasok Bahan Tambahan
            </Radio>
            <Radio style={radioStyle} value={3}>
              Pemasok Kemasan
            </Radio>
            <Radio style={radioStyle} value={4}>
              UMKM Pengolah Apel
            </Radio>
            <Radio style={radioStyle} value={5}>
              Retail & Outlet Produk Olahan Apel
            </Radio>
          </Radio.Group>
        </Form.Item>
        <div className="buttonGroup">
          <Row justify="space-between">
            {/* Back Button */}
            <Row justify="start">
              <Col>
                <Button className="btn_tertiary" size="large" disabled={true}>
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
