import React from "react";
import { Form, Row, Col, Input, Button, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./GantiProfile.scss"

export default function GantiProfile(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

  const dateFormat = "YYYY-MM-DD";
  const rules = [{ required: true }];

  console.log(props.data)

  return (
    <div id="ganti-profile">
      <div className="title">Ganti Profile</div>

      <Row justify="start">
        <Col span={14}>
          <div className="form">
            <Form {...layout} onFinish={props.onFinish} form={form} initialValues={form.setFieldsValue(props.data)}>
              <Form.Item
                label="Nama Lengkap"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan nama lengkap anda !",
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan email anda !",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>

              <Form.Item
                label="Alamat"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan alamat anda !",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>

              <Form.Item
                label="Nomor HP"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan nomor anda !",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Tanggal Lahir"
                name="birthDate"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan tanggal lahir anda !",
                  },
                ]}
              >
                <DatePicker format={dateFormat} />
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan username anda!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Tolong masukkan password anda!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Col span={24} offset={6}>
                <Row>
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
                          <Row key={field.key}>
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
                                  placeholder="Isi disini dengan nomor rekening dari bank"
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
              </Col>

              <div className="center">
                <Button htmlType="submit" className="btn_primary">
                  Rubah Profile
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
