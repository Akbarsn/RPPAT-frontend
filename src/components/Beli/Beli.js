import React, { useState, useEffect } from "react";
import "./Beli.scss";
import { Input, Card, Row, Col, Pagination } from "antd";
import Isi from "./Card";

export default function Beli(props) {
  const data = props.data;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(page) {
    if (page <= 1) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(maxValue);
      setMaxValue(page * 9);
    }
  }

  function checkData() {
    if (searchTerm) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const results = props.data.filter((datas) => {
      const lower = datas.stok.map((stocks) => {
        const baranglower = stocks.barang.toLowerCase();
        if (baranglower.toString().includes(searchTerm.toLowerCase())) {
          console.log("1");
          return baranglower;
        }
        console.log("2");
        return [];
      });
      return lower.toString().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div id="beli">
      <p className="titlepage" style={{ margin: "1% 2% 1% 2%" }}>
        Beli {props.nama}
      </p>
      <div className="searchbox">
        <Input.Search
          placeholder={props.search}
          style={{ margin: "1% 2% 2% 2%", width: 500, zIndex: -1 }}
          enterButton
          size="large"
          onChange={(data) => setSearchTerm(data.target.value)}
        />
      </div>
      <div className="toko">
        <Row gutter={16} style={{ marginLeft: "1.5%" }}>
          {checkData()
            ? searchResults.slice(minValue, maxValue).map((datas) => {
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
              })
            : data.map((datas) => {
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
          // showTotal={(total, range) =>
          //   `${range[0]}-${range[1]} dari ${total} toko`
          // }
          onChange={handleChange}
          total={checkData() ? searchResults.length : data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
