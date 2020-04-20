import React, { useState } from "react";
import { Row, Col, Modal, Form, Input, Select, Button, message } from "antd";
import Table from "../Table";

import { PlusOutlined } from "@ant-design/icons";

import "./Laporan.scss";
import "../Inc.scss";

export default function Laporan(props) {
  let [visible, setVisible] = useState(false);
  const [loading, setloading] = useState(false);

  //Button Handler

  function checkButton(isThereButton) {
    if (isThereButton) {
      const text = (
        <Row align="middle">
          <Col>
            <PlusOutlined className="icon" />
          </Col>
          <Col>
            <span className="button-text">Tambah</span>
          </Col>
        </Row>
      );
      const button = (
        <Button className="btn_secondary" onClick={() => setVisible(true)}>
          {text}
        </Button>
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

    const errorHandler = (error) => {
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
          onFinish={props.handleSubmit}
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
                    message: "Isi nama barang anda",
                  },
                ]}
              >
                <Input placeholder="Masukkan nama barang" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[48, 32]}>
            {props.fields.map((field) => {
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
                          message: "Pilih grade apel anda",
                        },
                      ]}
                    >
                      <Select placeholder="Pilih grade apel anda">
                        {field.options.map((option) => {
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
              const placeholder = `Masukkan ${field.label}`;
              return (
                <Col span={11}>
                  <Form.Item
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    rules={[
                      {
                        required: true,
                        message: `Isi ${field.label} anda`,
                      },
                    ]}
                  >
                    <Input type={field.type} placeholder={placeholder} />
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
              loading={props.loading}
              type="primary"
              size="large"
              htmlType="submit"
              className="btn_primary"
              onClick={() => {loading ? setVisible(true):
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
    <div id="laporan">
      <div style={{ marginLeft: "1.5rem" }}>
        <span className="title">Laporan {props.name}</span>

        <Col span={24}>
          <Row justify="space-between" style={{ marginBottom: "1rem" }}>
            <Col span={6}>
              <span className="subtitle">{props.name}</span>
            </Col>

            <Col span={4}>{checkButton(props.isThereButton)}</Col>
          </Row>
        </Col>

        <Row justify="start">
          <Col span={23}>
            <Table
              pagination={[5, 10, 15]}
              columns={props.table.columns}
              rows={props.table.rows}
              togglePagination={props.table.isPaginate}
              toggleTotal={props.table.isTotal}
            ></Table>
          </Col>
        </Row>

        {checkModal(props)}
      </div>
    </div>
  );
}
