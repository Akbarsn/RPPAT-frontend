import React, { useState } from "react";
import { Row, Col, Card, Button, Radio, Form } from "antd";
import Table from "../Table";

import "./index.scss";

export default function DetailPembayaran(props) {
  const [index, setIndex] = useState(0);
  const [bankName, setbankName] = useState(props.bankAccount[0].name);
  const bankDetail = props.bankDetail;

  const handleIndex = (e) => {
    // console.log(e.target.value);
    let temp = e.target.value.split("-");
    setIndex(temp[0]);
    setbankName(temp[1]);
  };

  return (
    <div style={{ marginLeft: "2rem" }} id="detailPembayaran">
      <span className="title">Info Pembayaran</span>

      <div style={{ marginTop: "2rem" }}>
        <span className="subtitle">Detail Pemesanan</span>

        <Row>
          <Col span={23}>
            <Table
              columns={props.columns}
              rows={props.rows}
              togglePagination={false}
              toggleTotal={true}
            ></Table>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <span className="subtitle">Channel Pembayaran</span>
        <div className="paragraph">Pilih salah satu pembayaran dibawah ini</div>
        <div style={{ marginBottom: "1rem" }}></div>
        <Row>
          <Col span={22}>
            <Form>
              <Form.Item>
                <Radio.Group onChange={handleIndex}>
                  {props.bankAccount.map((bank) => {
                    return (
                      <Radio.Button
                        value={bank.index + "-" + bank.name}
                        className="radioButton"
                      >
                        {bank.name}
                      </Radio.Button>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            </Form>
            <Card className="card">
              <span className="paragraph">
                <span id="highlight">{bankName}</span> <br />
                Silahkan Transfer ke no Rekening berikut : <br />{" "}
                <span id="highlight">
                  {bankDetail[index].number} atas nama {bankDetail[index].name}
                </span>{" "}
                <br />
                Dan silahkan upload bukti pembayaran melalui halaman notifikasi
                <br />
              </span>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="buttonGroup">
        <Row justify="space-between">
          <Col span={2}>
            <Button
              type="secondary"
              className="btn_secondary"
              onClick={() => { }}
            >
              Back
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" className="btn_primary" onClick={() => { }}>
              Selesai
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
