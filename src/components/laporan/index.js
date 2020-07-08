import React, { useState, Fragment, useEffect } from "react";
import {
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
  Button,
  message,
  InputNumber,
} from "antd";
import Table from "../Table";

import { PlusOutlined } from "@ant-design/icons";

import "./Laporan.scss";
import "../Inc.scss";

export default function Laporan(props) {
  let [visible, setVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [list, setList] = useState([]);
  const [datas, setDatas] = useState([]);

  function searchDetail(value) {
    const getIndexArray = datas.map((e) => e.item).indexOf(value);
    const values = [...list];
    const results = datas.filter((data) => {
      const namalower = data.item.toLowerCase();
      return namalower.includes(value.toLowerCase());
    });
    values.push({
      id: results[0].id,
      item: results[0].item,
      max: results[0].qty,
      qty: 1,
    });
    const newData = [...datas];
    newData.splice(getIndexArray, 1);
    setDatas(newData);
    setList(values);
  }

  function handleInputChange(data, index) {
    const values = [...list];
    const addData = [...datas];
    if (data > 0) {
      values[index].qty = data;
    } else {
      addData.push(values[index]);
      values.splice(index, 1);
    }
    setList(values);
    setDatas(addData);
  }

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
        <Button
          className="btn_secondary"
          onClick={() => {
            setVisible(true);
            setDatas(props.material);
          }}
        >
          {text}
        </Button>
      );
      return button;
    }
  }

  function handleFinish(value) {
    if (props.resep) {
      let material = [];
      list.map((data) => {
        return (
          material.push({
            id: data.id,
            item: data.item,
            qty: data.qty
          })
        )
      })
      Object.assign(value, { materials: material });
    }
    props.onFinish(value);
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
        onCancel={() => handleCancel()}
        footer={false}
      >
        {/* Form */}
        <Form
          name="addStock"
          layout="vertical"
          onFinish={handleFinish}
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
          
          {props.resep ? (
            <div className="bahan">
              <hr />
              <div className="title-bahan">Bahan</div>
              {console.log("datas")}
              {console.log(datas)}
              <Select
                showSearch
                style={{ width: 400 }}
                size="large"
                placeholder="eg. Apel"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={searchDetail}
              >
                {datas.map((data) => {
                  return (
                    <Select.Option value={data.item} key={data.id}>
                      {data.item}
                    </Select.Option>
                  );
                })}
              </Select>
              <div style={{ overflowY: "scroll", height: "40vh" }}>
                {list.map((data, index) => {
                  return (
                    <div className="listbarang-kasir" key={data.item}>
                      <Row justify="space-between" align="middle">
                        <Col span={12}>
                          <div className="nama-bahan">{data.item}</div>
                        </Col>
                        <Col span={12}>
                          <Form
                            className="form-kasir"
                            initialValues={{ qty: data.qty }}
                          >
                            <Form.Item
                              name="qty"
                              label="Qty"
                              rules={[
                                {
                                  type: "number",
                                  min: 1,
                                  max: data.max,
                                  message: "Masukan tidak boleh melebihi kuantitas",
                                },
                              ]}
                            >
                              <InputNumber
                                onChange={(data) =>
                                  handleInputChange(data, index)
                                }
                              />
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>
                      <hr className="hr-kasir-2" />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
              <Fragment />
            )}

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
              onClick={() => {
                props.loading ? setVisible(true) : setVisible(false);
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
        <span className="title">
          {props.notitle ? <Fragment /> : "Laporan " + props.name}{" "}
        </span>

        <Col span={24} style={{ paddingTop: "2rem" }}>
          <Row justify="space-between" style={{ marginBottom: "1rem" }}>
            <Col span={12}>
              <span className="subtitle">{props.name}</span>
            </Col>

            <Col span={12} style={{ textAlign: "right", paddingRight: "3rem" }}>
              {checkButton(props.isThereButton)}
            </Col>
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
              empty="Tidak Ada Data"
            ></Table>
          </Col>
        </Row>

        {checkModal(props)}
      </div>
    </div>
  );
}
