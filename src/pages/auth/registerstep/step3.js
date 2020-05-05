import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./step3.scss";

export default function Step3(props) {

  const rules = [{ required: true }];

  return (
    <div id="step3">
      <Form onFinish={props.onFinishStep3} initialValues={props.data}>
        <div className="title">Channel Pembayaran</div>
        <Row gutter={[16]}>
          <Col>
            <span className="subhead">Nama Bank</span>
          </Col>
          <Col>
            <span className="subhead">No Rekening</span>
          </Col>
        </Row>
        <Form.List name="banks">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Row key={field.key} gutter={16}>
                    <Col>
                      <Form.Item
                        name={[field.name, "bankAcc"]}
                        fieldKey={[field.fieldKey, "bankAcc"]}
                        rules={rules}
                      >
                        <Input
                          size="large"
                          placeholder="Isi disini dengan nama Bank eg. BNI"
                        />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        name={[field.name, "bankNumber"]}
                        fieldKey={[field.fieldKey, "bankNumber"]}
                        rules={rules}
                      >
                        <Input
                          size="large"
                          placeholder="Eg. 06123123_John Doe"
                        />
                      </Form.Item>
                    </Col>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: "100%" }}
                  >
                    <PlusOutlined /> Tambah No Rekening
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

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
