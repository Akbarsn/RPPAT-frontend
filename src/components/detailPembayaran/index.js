import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Radio, Form, message } from "antd";
import Table from "../Table";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import API from "../../pages/API";

import "./DetailPembayaran.scss";

function DetailPembayaran(props) {
  let data = useSelector((state) => state.data);
  let bankacc = useSelector((state) => state.bankacc);
  let bankdetail = useSelector((state) => state.bankdetail);
  const dispatch = useDispatch();

  const history = useHistory();
  const jenisToko = props.store;

  const [index, setIndex] = useState(0);
  const [bankName, setbankName] = useState(bankacc[0].name);
  const bankDetail = bankdetail;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let stok = [];
      let inside = [];
      let total = 0;
      let no = 0;
      for (let k = 0; k < data.length; k++) {
        let temp;
        let harga =
          (jenisToko === "baku" ? data[k].price : data[k].sellPrice) *
          data[k].inputdata;
        for (let i = 0; i < 4; i++) {
          switch (i) {
            case 0:
              temp = {
                value: ++no,
                align: "center",
              };
              inside.push(temp);
              break;
            case 1:
              temp = {
                value: data[k].item,
                align: "left",
              };
              inside.push(temp);
              break;
            case 2:
              temp = {
                value: data[k].inputdata,
                align: "center",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: harga,
                align: "right",
              };
              inside.push(temp);
              break;
          }
        }
        total += harga;
        stok.push({ data: inside });
        inside = [];
      }
      setTotal(total);
      setRows(stok);
    };
    const fetchData2 = async () => {
      let stok = [];
      let inside = [];
      let total = 0;
      let no = 0;
      for (let k = 0; k < data.length; k++) {
        let temp;
        let harga =
          (jenisToko === "baku" ? data[k].price : data[k].sellPrice) *
          data[k].inputdata;
        for (let i = 0; i < 5; i++) {
          switch (i) {
            case 0:
              temp = {
                value: ++no,
                align: "center",
              };
              inside.push(temp);
              break;
            case 1:
              temp = {
                value: data[k].item,
                align: "left",
              };
              inside.push(temp);
              break;
            case 2:
              temp = {
                value: data[k].grade,
                align: "center",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: data[k].inputdata,
                align: "center",
              };
              inside.push(temp);
              break;
            case 4:
              temp = {
                value: harga,
                align: "right",
              };
              inside.push(temp);
              break;
          }
        }
        total += harga;
        stok.push({ data: inside });
        inside = [];
      }
      console.log(total);
      setTotal(total);
      setRows(stok);
    };
    jenisToko === "baku" ? fetchData2() : fetchData();
  }, [data]);

  const handleIndex = (e) => {
    // console.log(e.target.value);
    let temp = e.target.value.split("-");
    setIndex(temp[0] - 1);
    setbankName(temp[1]);
  };

  function handleBack() {
    let datform = [];
    data.map((item) => {
      let temp = { [item.id]: item.inputdata };
      datform.push(temp);
    });
    let newDatForm = Object.assign({}, ...datform);
    dispatch({ type: "ADD_FORM_VALUE", payload: newDatForm });
    history.push(props.linkback);
  }

  function handleItemDetail(data) {
    console.log(data);
    let detail = [];
    data.map((item) => {
      let temp;
      if (jenisToko === "baku") {
        temp = {
          id: item.id,
          item: item.item,
          grade: item.grade,
          qty: item.inputdata,
          price: item.price,
          unit: item.unit,
        };
      } else {
        temp = {
          id: item.id,
          item: item.item,
          unit: jenisToko === "umkm" ? item.weight : item.unit,
          qty: item.inputdata,
          price: item.sellPrice,
        };
      }
      detail.push(temp);
    });
    return detail;
  }

  async function handleSelesai() {
    setLoading(true);
    let itemDetail = handleItemDetail(data);
    let bank =
      bankName + "-" + bankDetail[index].number + "-" + bankDetail[index].name;
    let forBuyer = "Pembelian ";
    let forSeller = "Penjualan ";
    let type = 1;
    switch (jenisToko) {
      case "baku":
        forBuyer += "Bahan Baku";
        forSeller += "Bahan Baku";
        type = 2;
        break;
      case "tambahan":
        forBuyer += "Bahan Tambahan";
        forSeller += "Bahan Tambahan";
        type = 4;
        break;
      case "kemasan":
        forBuyer += "Kemasan";
        forSeller += "Kemasan";
        type = 3;
        break;
      case "umkm":
        forBuyer += "Produk";
        forSeller += "Produk";
    }
    let postvalue = {
      from: props.from,
      total: total,
      forBuyer: forBuyer,
      forSeller: forSeller,
      type: type,
      banks: bank,
      items: itemDetail,
    };
    console.log(postvalue);
    try {
      const result = await API.post(props.linkpost, postvalue, {
        headers: {
          Authorization: `bearer ${props.token}`,
          "content-type": "application/json",
        },
      });
      console.log(result);
      if (result.status == 200) {
        message.info(
          "Silahkan cek notifikasi anda untuk melanjutkan pembayaran"
        );
        dispatch({ type: "DELETE_DATA" });
        history.push(props.linkselesai);
      } else {
        message.error("Pesanan anda gagal diproses");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <div>
      {data.length < 1 ? (
        history.push(props.linkback)
      ) : (
        <div style={{ marginLeft: "2rem" }} id="detailPembayaran">
          <span className="title">Info Pembayaran</span>

          <div style={{ marginTop: "2rem" }}>
            <span className="subtitle">Detail Pemesanan</span>

            <Row>
              <Col span={23}>
                {console.log(rows)}
                <Table
                  columns={props.columns}
                  rows={rows}
                  empty="Tidak Ada Transaksi"
                  togglePagination={false}
                  toggleTotal={true}
                  total={total}
                ></Table>
              </Col>
            </Row>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <span className="subtitle">Channel Pembayaran</span>
            <div className="paragraph">
              Pilih salah satu pembayaran dibawah ini
            </div>
            <div style={{ marginBottom: "1rem" }}></div>
            <Row>
              <Col span={22}>
                <Form>
                  <Form.Item>
                    <Radio.Group onChange={handleIndex}>
                      {bankacc.map((bank) => {
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
                      {bankDetail[index].number} atas nama{" "}
                      {bankDetail[index].name}
                    </span>{" "}
                    <br />
                    Dan silahkan upload bukti pembayaran melalui halaman
                    notifikasi
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
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </Col>
                <Col span={2}>
                  <Button
                    type="primary"
                    className="btn_primary"
                    loading={loading}
                    onClick={handleSelesai}
                  >
                    Selesai
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPembayaran;
