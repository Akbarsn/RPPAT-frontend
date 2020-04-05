import React from "react";
import { Row, Col, Card, Table } from "antd";

import "./index.scss";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <div style={{marginLeft:"1rem"}}>
        <span className="title">Beranda</span>

        <Row justify="space-around" gutter={[24, 48]}>
          <Col span={11}>
            <Card className="card">
              <Row>
                <Col>
                  <span className="title">{props.card1.title} </span>
                </Col>
              </Row>
              <Row>
                <Col offset={5} className="content">
                  {props.card1.content}
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={11}>
            <Card className="card">
              <Row>
                <Col>
                  <span className="title">{props.card2.title} </span>
                </Col>
              </Row>
              <Row>
                <Col offset={5} className="content">
                  {props.card2.content}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row justify="space-around" gutter={[24, 48]}>
          <Col span={23}>
            <Card className="card">
              <span className="title">{props.table.title} </span>
              <Table
                columns={props.table.column}
                dataSource={props.table.data}
                id="table"
              ></Table>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
