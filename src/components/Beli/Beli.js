import React from "react";
import "./Beli.scss";
import { Input, Button, Card, Row, Col, Pagination } from "antd";
import Isi from "./Card";

export default function Beli(props) {
  
  return (
    <div className="beli">
      <p className="titlepage" style={{ margin: "1% 2% 1% 2%" }}>
        Beli {props.nama}
      </p>
      <div className="searchbox">
        <Input.Search
          placeholder="Cari Produk Disini"
          style={{ margin: "1% 2% 2% 2%", width: 500 }}
          enterButton
          size="large"
        />
      </div>
      <div className="toko">
        <Row gutter={16} style={{ marginLeft: "1.5%" }}>
          <Col className="gutter-row" span={7}>
            <Card>
              <Isi />
            </Card>
          </Col>
          <Col className="gutter-row" span={7}>
            <Card>Hey</Card>
          </Col>
          <Col className="gutter-row" span={7}>
            <Card>Hey</Card>
          </Col>
        </Row>
      </div>
      <div className="custompagination">        <Pagination
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} dari ${total} halaman`
          }
          total={500}
        />
      </div>
    </div>
  );
}
