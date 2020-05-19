import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import Table from "../Table";
import "./TambahKasir.scss";

export default function TambahKasir(props) {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  return (
    <div id="tambah_kasir">
      <div className="title">Tambah Kasir</div>

      <Row justify="space-around" gutter={[24]}>
        <Col span={24}>
          <Form {...layout} onFinish={props.onFinish}>
            <Form.Item
              label="Nama Lengkap"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Mohon untuk mengisi nama lengkap ",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Mohon untuk mengisi username ",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Mohon untuk mengisi password" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="center">
              <Button className="btn_primary" htmlType="submit">
                Tambah
              </Button>
            </div>
          </Form>
        </Col>
        <Col span={24}>
          <div style={{marginTop:'2rem'}}>
              <h1 className="title">Data Kasir</h1>
          </div>
          <Table
            columns={props.columns}
            rows={props.rows}
            togglePagination={false}
            toggleTotal={false}
          />
        </Col>
      </Row>
    </div>
  );
}
