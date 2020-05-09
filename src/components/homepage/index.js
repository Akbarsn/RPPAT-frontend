import React, { Fragment } from "react";
import { Row, Col, Card, Empty } from "antd";
import Table from "../Table";

import "./Homepage.scss";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <div style={{ marginLeft: "1rem" }}>
        <span className="title">Beranda</span>
            <Card className="card stok-home">
              <Row>
                <Col>
                  <span className="title">Stok : </span>
                </Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>
              {props.stocks.length < 1 ? (
                <Empty description={<span>Tidak ada Stok</span>} />
              ) : (
                props.stocks.map((stock) => (
                  <Row className="stock">
                    <Col span={18}>{stock.item}</Col>
                    <Col style={{ fontWeight: 700 }} span={6}>
                      {stock.qty} {props.unit}{" "}
                    </Col>
                  </Row>
                ))
              )}
            </Card>


        <Row justify="space-around" gutter={[24, 12]}>
          {props.isBuying ? (
            <Fragment>
              <Col span={11}>
                <Card className="card">
                  <Row>
                    <Col>
                      <span className="title">Penjualan Bulan Ini : </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col offset={4} className="content">
                      Rp. {props.selling}
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col span={11}>
                <Card className="card">
                  <Row>
                    <Col>
                      <span className="title">Pembelian Bulan Ini : </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col offset={4} className="content">
                      {console.log(props)}
                      Rp. {props.buying}
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Fragment>
          ) : (
            <Col span={11} offset={12}>
                <Card className="card">
                  <Row>
                    <Col>
                      <span className="title">Penjualan Bulan Ini : </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col offset={4} className="content">
                      Rp. {props.selling}
                    </Col>
                  </Row>
                </Card>
              </Col>
          )}
        </Row>

        <Row justify="space-around" gutter={[24, 12]}>
          <Col span={23}>
            <Card className="card">
              <span className="title"> Riwayat Transaksi : </span>
              <Table
                columns={props.columns}
                rows={props.rows}
                togglePagination={false}
                toggleTotal={false}
                empty="Tidak Ada Riwayat Transaksi"
              ></Table>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
