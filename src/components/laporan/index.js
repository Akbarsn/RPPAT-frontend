import React, { useState } from "react";
import { Row, Table, Col, Modal, Form, Input, Select, Button } from "antd";
import Button1 from "../inc/Button";

import { PlusOutlined } from "@ant-design/icons";

import "./index.scss";

export default function Laporan(props) {
  let [visible, setVisible] = useState(false);
  const [loading, setloading] = useState(false);

  //Button Handler

  function checkButton(isThereButton) {
    if (isThereButton) {
      const text = (
        <Row align="middle">
          <PlusOutlined className="icon" />
          <span className="button-text">Tambah</span>
        </Row>
      );
      const button = (
        <Button1 type="secondary" click={() => setVisible(true)} text={text} />
      );
      return button;
    }
  }

  //Modal
  function checkModal(props) {
    //Modal Button Handler
    function handleOk(handleSubmit) {
      // handleSubmit;
      setloading(true);
      setTimeout(() => {
        setloading(false);
        setVisible(false);
      }, 3000);
    }

    function handleCancel() {
      setVisible(false);
    }

    //Form Handler
    const submitHandler = values => {
      alert("Success");
      console.log(values);
    };

    const errorHandler = error => {
      console.log("Failed", error);
    };

    if (!props.isThereButton) {
      return <div></div>;
    }
    return (
      <Modal
        title={`Tambah ${props.name}`}
        visible={visible}
        onOk={() => handleOk(props.handleSubmit)}
        onCancel={() => handleCancel()}
        footer={false}
      >
        {/* Form */}
        <Form
          name="addStock"
          layout="vertical"
          onFinish={submitHandler}
          onFinishFailed={errorHandler}
        >
          <Row>
            <Col>
              <Form.Item
                label={props.firstItem}
                name="item"
                rules={[
                  {
                    required: true,
                    message: "Isi field item ini"
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[48, 32]}>
            {props.fields.map(field => {
              if (field.type === "select") {
                return (
                  <Col span={11}>
                    <Form.Item
                      key="grade"
                      label={field.label}
                      name={field.name}
                      rules={[
                        {
                          required: true,
                          message: "Isi field ini"
                        }
                      ]}
                    >
                      <Select placeholder="Masukkan Grade">
                        {field.options.map(option => {
                          return (
                            <Select.Option
                              key={option.value}
                              value={option.value}
                            >
                              {option.name}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                );
              }
              return (
                <Col span={11}>
                  <Form.Item
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    rules={[
                      {
                        required: true,
                        message: "Isi field ini"
                      }
                    ]}
                  >
                    <Input type={field.type} />
                  </Form.Item>
                </Col>
              );
            })}
          </Row>

          <Row justify="space-around">
            <Button
              type="secondary"
              size="large"
              onClick={() => handleCancel()}
              className="btn_secondary"
            >
              Batal
            </Button>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="btn_primary"
              onClick={() => {
                setVisible(false);
              }}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }

  return (
    <React.Fragment>
      <span className="title">Laporan {props.name}</span>

      <Row justify="space-between" style={{ marginBottom: "1rem" }}>
        <Col span={4}>
          <span className="subtitle">{props.name}</span>
        </Col>

        <Col span={4}>{checkButton(props.isThereButton)}</Col>
      </Row>

      <Row justify="start">
        <Col span={23}>
          <Table
            columns={props.table.columns}
            dataSource={props.table.data}
            style={{
              fontSize: "16px!important"
            }}
          ></Table>
        </Col>
      </Row>

      {checkModal(props)}
    </React.Fragment>
  );
}
