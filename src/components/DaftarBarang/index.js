import React, { useState, useEffect } from "react";
import "./index.scss";
import { Card, Row, Col, Pagination, Input } from "antd";
import Isi from "./Card";

export default function Index(props) {
  const data = props.data;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  function handleChange(page, pageSize) {
    if (page <= 1) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(maxValue);
      setMaxValue(page * 9);
    }
  }

  useEffect(() => {
    const results = data.filter((datas) => {
      const namalower = datas.nama.toLowerCase();
      return namalower.toString().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="daftarbarang">
      <div className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
        <p>Daftar Barang</p>
      </div>
      <div className="searchbox">
        <Input.Search
          placeholder={props.search}
          style={{ margin: "1% 2% 2% 2%", width: 500 }}
          enterButton
          size="large"
          onChange={(data) => setSearchTerm(data.target.value)}
        />
      </div>
      <div className="toko">
        <Row gutter={16} style={{ marginLeft: "1.5%" }}>
          {searchResults.slice(minValue, maxValue).map((datas) => {
            return (
              <Col
                className="gutter-row"
                span={7}
                style={{ marginBottom: "1%" }}
              >
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
          total={searchResults.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
