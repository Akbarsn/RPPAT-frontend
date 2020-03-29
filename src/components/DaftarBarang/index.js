import React, { useState } from "react";
import "./index.scss";
import { Card, Row, Col, Pagination } from "antd";
import Isi from './Card';

export default function Index(props) {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(9);

  function handleChange(page, pageSize){
    if (page <=1){
      setMinValue(0);
      setMaxValue(9);
    }
    else {
      setMinValue(maxValue);
      setMaxValue(page*9)
    }
  }

  return (
    <div className="daftarbarang">
    <div className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
      <p>Daftar Barang</p>
    </div>
    <div className="toko">
        <Row gutter={16} style={{ marginLeft: "1.5%" }}>
        {props.data.slice(minValue, maxValue).map(datas => {
            return (
              <Col className="gutter-row" span={7} style={{ marginBottom: "1%" }}>
                <Card key={datas}>
                  <Isi data={datas} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="custompagination">
        <Pagination
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} dari ${total} toko`
          }
          onChange={handleChange}
          total={props.data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
