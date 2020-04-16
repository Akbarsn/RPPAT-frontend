import React, { useState, Fragment } from "react";
import "./Riwayat.scss";
import Tabel from "../Table";
import { Row, Col, Button, Modal } from "antd";

export default function Index(props) {
  const [visible, setVisible] = useState(0);
  
  return (
    <div id="riwayattransaksi">
      <p className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
        Riwayat Transaksi
      </p>
      <div className="detailtransaksi" style={{ margin: "4% 1%" }}>
        <Row>
          <Col span={11} style={{ margin: "1%" }}>
            <div className="cardsecondary">
              <p className="thirdtitle">Pemasukan :</p>
              <p className="datauang">Rp. {props.masuk}</p>
            </div>
          </Col>
          {props.pengeluaran ? (
            <Col span={11} style={{ margin: "1% 3% 1% 1%" }}>
              <div className="cardsecondary">
                <p className="thirdtitle">Pengeluaran :</p>
                <p className="datauang">Rp. {props.keluar}</p>
              </div>
            </Col>
          ) : (
            <Fragment />
          )}
        </Row>
      </div>
      <p className="sectitle" style={{ margin: "1% 2%" }}>
        Detail Transaksi
      </p>
      <div className="tablestok">
        <Tabel
          pagination={[5, 10, 15]}
          columns={props.columns}
          rows={props.rows}
          togglePagination={false}
          toggleTotal={true}
          total={props.total}
        />
      </div>
    </div>
  );
}
