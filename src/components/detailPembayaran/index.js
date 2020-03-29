import React, { useState } from "react";
import { Row, Col, Card, Button } from "antd";
import Table from "../Table";

import "./index.scss";

export default function DetailPembayaran(props) {
  const [index, setIndex] = useState(0);
  const [bankName, setbankName] = useState(props.bankAccount[0].name);
  const bankDetail = props.bankDetail;

  const handleIndex = e => {
    setIndex(e.currentTarget.value);
    setbankName(e.currentTarget.dataset.bankname);
  };

  return (
    <div style={{ marginLeft: "2rem" }}>
      <span className="title">Info Pembayaran</span>

      <div style={{ marginTop: "2rem" }}>
        <span className="subtitle">Detail Pemesanan</span>

        <Row>
          <Col span={23}>
            <Table
              pagination={[5, 10, 15]}
              columns={props.columns}
              rows={props.rows}
              togglePagination={false}
              toggleTotal={true}
            ></Table>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <span className="subtitle">Instruksi Pembayaran</span>
        <div style={{ marginBottom: "1rem" }}></div>
        <Row>
          <Col span={23}>
            <Row gutter={[24]}>
              {props.bankAccount.map(bank => {
                return (
                  <Col span={2}>
                    <Button
                      type="secondary"
                      className="btn_secondary"
                      onClick={handleIndex}
                      value={bank.index}
                      data-bankName={bank.name}
                    >
                      {bank.name}
                    </Button>
                  </Col>
                );
              })}
            </Row>
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
            <Button type="secondary" className="btn_secondary" onClick={() => {}}>
              Back
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" className="btn_primary" onClick={() => {}}>
              Selesai
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
