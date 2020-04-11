import React from "react";
import { Row, Col, Select, InputNumber, Form, Button } from "antd";
import "./index.scss";

export default function Transaksi(props) {
  return (
    <div className="bodykasir">
      <div className="titlepage">Transaksi</div>

      <Row>
        <Col span={12} className="kasir-left">
          <div className="search-kasir">
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Nama Barang
            </div>
            <Select
              showSearch
              style={{ width: 400 }}
              size="large"
              placeholder="eg. Kripik Apel"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
            <br />
            <br />
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Detail Barang
            </div>
            <hr className="hr-kasir" />
            <div className="namabarang-kasir">Kripik Apel</div>
            <div className="beratbarang-kasir">500 gr</div>
            <div className="namabarang-kasir">Rp. 25.000</div>
            <Form className="form-kasir">
              <Form.Item name="qty" label="Qty" rules={[{ required: true }]}>
                <InputNumber size="large" min={1} max={100000} />
              </Form.Item>
            </Form>
            <div style={{ textAlign: "right" }}>
              <Button className="btn_primary">Tambah</Button>
            </div>
          </div>
        </Col>

        <Col span={12} className="kasir-right">
          <div className="listkasir">
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Transaksi
            </div>
            <div className="date-kasir">Rabu, 18 Maret 2020</div>
            <hr className="hr-kasir-2" />
            <div style={{ overflowY:"scroll", height:"30vh" }}>
              <div className="listbarang-kasir">
                <Row justify="space-around" align="middle">
                  <Col>
                    <div className="namabarang-transaksi">Kripik Apel</div>
                    <div className="beratbarang-transaksi">500 gr</div>
                    <div
                      className="namabarang-transaksi"
                      style={{ fontWeight: "bold" }}
                    >
                      Rp. 50.000
                    </div>
                  </Col>
                  <Col>
                    <Form className="form-kasir">
                      <Form.Item
                        name="qty"
                        label="Qty"
                        rules={[{ required: true }]}
                      >
                        <InputNumber max={100000} />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <hr className="hr-kasir-2" />
              </div>
              <div className="listbarang-kasir">
                <Row justify="space-around" align="middle">
                  <Col>
                    <div className="namabarang-transaksi">Kripik Apel</div>
                    <div className="beratbarang-transaksi">500 gr</div>
                    <div
                      className="namabarang-transaksi"
                      style={{ fontWeight: "bold" }}
                    >
                      Rp. 50.000
                    </div>
                  </Col>
                  <Col>
                    <Form className="form-kasir">
                      <Form.Item
                        name="qty"
                        label="Qty"
                        rules={[{ required: true }]}
                      >
                        <InputNumber max={100000} />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <hr className="hr-kasir-2" />
              </div>
              <div className="listbarang-kasir">
                <Row justify="space-around" align="middle">
                  <Col>
                    <div className="namabarang-transaksi">Kripik Apel</div>
                    <div className="beratbarang-transaksi">500 gr</div>
                    <div
                      className="namabarang-transaksi"
                      style={{ fontWeight: "bold" }}
                    >
                      Rp. 50.000
                    </div>
                  </Col>
                  <Col>
                    <Form className="form-kasir">
                      <Form.Item
                        name="qty"
                        label="Qty"
                        rules={[{ required: true }]}
                      >
                        <InputNumber max={100000} />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <hr className="hr-kasir-2" />
              </div>
              <div className="listbarang-kasir">
                <Row justify="space-around" align="middle">
                  <Col>
                    <div className="namabarang-transaksi">Kripik Apel</div>
                    <div className="beratbarang-transaksi">500 gr</div>
                    <div
                      className="namabarang-transaksi"
                      style={{ fontWeight: "bold" }}
                    >
                      Rp. 50.000
                    </div>
                  </Col>
                  <Col>
                    <Form className="form-kasir">
                      <Form.Item
                        name="qty"
                        label="Qty"
                        rules={[{ required: true }]}
                      >
                        <InputNumber max={100000} />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <hr className="hr-kasir-2" />
              </div>
              <div className="listbarang-kasir">
                <Row justify="space-around" align="middle">
                  <Col>
                    <div className="namabarang-transaksi">Kripik Apel</div>
                    <div className="beratbarang-transaksi">500 gr</div>
                    <div
                      className="namabarang-transaksi"
                      style={{ fontWeight: "bold" }}
                    >
                      Rp. 50.000
                    </div>
                  </Col>
                  <Col>
                    <Form className="form-kasir">
                      <Form.Item
                        name="qty"
                        label="Qty"
                        rules={[{ required: true }]}
                      >
                        <InputNumber max={100000} />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <hr className="hr-kasir-2" />
              </div>
            </div>
            <div className="total-kasir">
              <div>Total</div>
              <div>Rp. 75.000</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <Button className="btn_primary">Bayar</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
