import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Radio, Form } from "antd";
import Table from "../Table";
import {useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import "./DetailPembayaran.scss";

function DetailPembayaran(props) {
  let data = useSelector(state=>state.data);
  const dispatch = useDispatch();

  const history = useHistory();

  const [index, setIndex] = useState(0);
  const [bankName, setbankName] = useState(props.bankAccount[0].name);
  const bankDetail = props.bankDetail;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      let stok = [];
      let inside = [];
      let no =0;
      for(let k = 0; k < data.length; k++) {
        let temp;
          for (let i = 0; i < 4; i++) {
            switch (i) {
              case 0:
                temp = {
                  value: data[k].no,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 1:
                temp = {
                  value: data[k].nama,
                  align: "left",
                };
                inside.push(temp);
                break;
              case 2:
                temp = {
                  value: data[k].qty,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 3:
                temp = {
                  value: data[k].harga,
                  align: "right",
                };
                inside.push(temp);
                break;
            }
          }
          stok.push({data:inside});
          inside = [];
        };
        ++no;
      setRows(stok);
  }, []);

  const handleIndex = (e) => {
    // console.log(e.target.value);
    let temp = e.target.value.split("-");
    setIndex(temp[0]);
    setbankName(temp[1]);
  };

  async function handleSelesai(){
    setLoading(true)
    props.handleSubmit();
    dispatch({type:"DELETE_DATA"})
    setLoading(false)
  }

  return (
    <div style={{ marginLeft: "2rem" }} id="detailPembayaran">
      <span className="title">Info Pembayaran</span>

      <div style={{ marginTop: "2rem" }}>
        <span className="subtitle">Detail Pemesanan</span>

        <Row>
          <Col span={23}>
            <Table
              columns={props.columns}
              rows={rows}
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
        <Col span={22}>
          <Row justify="space-between">
            <Col span={2}>
              <Button
                type="secondary"
                className="btn_secondary"
                onClick={() => history.push('/detail-toko/1')}
              >
                Back
              </Button>
            </Col>
            <Col span={2}>
              <Button type="primary" className="btn_primary" loading = {loading} onClick={handleSelesai}>
                Selesai
              </Button>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default DetailPembayaran;


