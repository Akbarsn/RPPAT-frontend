import React, { useState, Fragment, useEffect } from "react";
import { Row, Col, Select, InputNumber, Form, Button, Modal } from "antd";
import "./index.scss";

export default function Transaksi(props) {
  const arrbulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const arrhari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();

  const [datas, setDatas] = useState(props.data);
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState(null);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  const [kembalian, setKembalian] = useState(null);
  const [tanggal, setTanggal] = useState(
    arrhari[day] +
      ", " +
      today.getDate() +
      " " +
      arrbulan[month] +
      " " +
      today.getFullYear()
  );

  function searchDetail(value) {
    const results = datas.filter((data) => {
      const namalower = data.item.toLowerCase();
      return namalower.includes(value.toLowerCase());
    });
    setDetail(results);
  }

  function handleAddFields(value) {
    const getIndexArray = datas.map((e) => e.item).indexOf(detail[0].item);
    const values = [...list];
    values.push({
      id: detail[0].id,
      item: detail[0].item,
      weight: detail[0].weight,
      price: detail[0].sellPrice,
      qty: value.qty,
    });
    setList(values);
    const newData = [...datas];
    newData.splice(getIndexArray, 1);
    setDatas(newData);
    setDetail(null);
  }

  function handleInputChange(data, index) {
    const values = [...list];
    const addData = [...datas];
    if (data > 0) {
      values[index].qty = data;
    } else {
      addData.push({
        item: values[index].item,
        weight: values[index].weight,
        price: values[index].sellPrice,
        qty: 0,
      });
      values.splice(index, 1);
    }
    setList(values);
    setDatas(addData);
  }

  useEffect(() => {
    let count = 0;
    list.map((e) => {
      count += e.price * e.qty;
      return count;
    });
    setTotal(count);
  }, [list]);

  function handleKembalian(value) {
    const change = value - total;
    setKembalian(change);
  }

  return (
    <div className="bodykasir">
      <div className="titlepage">Transaksi</div>
      <Row>
        <Col span={12} className="kasir-left">
          <div className="search-kasir">
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Nama Barang
            </div>
            <Select
              showSearch
              style={{ width: 400 }}
              size="large"
              placeholder="eg. Kripik Apel"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={searchDetail}
            >
              {datas.map((data) => {
                return (
                  <Select.Option value={data.item}>{data.item}</Select.Option>
                );
              })}
            </Select>
            <br />
            <br />
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Detail Barang
            </div>
            <hr className="hr-kasir" />
            {detail === null ? (
              <Fragment />
            ) : (
              <div>
                <div className="namabarang-kasir">{detail[0].item}</div>
                <div className="beratbarang-kasir">{detail[0].weight}</div>
                <div className="namabarang-kasir">
                  Rp{" "}
                  {detail[0].sellPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </div>
                <Form
                  className="form-kasir"
                  onFinish={handleAddFields}
                  initialValues={{ qty: 1 }}
                >
                  <Form.Item
                    name="qty"
                    label="Qty"
                    rules={[
                      {
                        required: true,
                        message: "Tolong lengkapi form anda !",
                      },
                    ]}
                  >
                    <InputNumber size="large" />
                  </Form.Item>

                  <Form.Item>
                    <div style={{ textAlign: "right" }}>
                      <Button className="btn_primary" htmlType="submit">
                        Tambah
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
        </Col>

        <Col span={12} className="kasir-right">
          <div className="listkasir">
            <div className="sectitle" style={{ marginLeft: "0%" }}>
              Transaksi
            </div>
            <div className="date-kasir">{tanggal}</div>
            <hr className="hr-kasir-2" />
            <div style={{ overflowY: "scroll", height: "40vh" }}>
              {list.map((data, index) => {
                return (
                  <div className="listbarang-kasir" key={data.item}>
                    <Row justify="space-between" align="middle">
                      <Col span={12}>
                        <div className="namabarang-transaksi">{data.item}</div>
                        <div className="beratbarang-transaksi">
                          {data.weight}
                        </div>
                        <div
                          className="namabarang-transaksi"
                          style={{ fontWeight: "bold" }}
                        >
                          Rp{" "}
                          {(data.price * data.qty)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </div>
                      </Col>
                      <Col span={12}>
                        <Form
                          className="form-kasir"
                          initialValues={{ qty: data.qty }}
                        >
                          <Form.Item
                            name="qty"
                            label="Qty"
                            rules={[{ required: true }]}
                          >
                            <InputNumber
                              onChange={(data) =>
                                handleInputChange(data, index)
                              }
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>
                    <hr className="hr-kasir-2" />
                  </div>
                );
              })}
            </div>
            <div className="total-kasir">
              <div>Total</div>
              <div>
                Rp {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <Button
                className="btn_primary"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Bayar
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Modal
        onCancel={() => setVisible(false)}
        visible={visible}
        footer={[
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="btn_tertiary" onClick={() => setVisible(false)}>
              Kembali
            </Button>
            <Button
              className="btn_primary"
              onClick={() => {
                setVisible(false);
                props.handleSubmit({ items: list, total });
              }}
              disabled={kembalian < 0 || kembalian === null ? true : false}
            >
              Selesai
            </Button>
          </div>,
        ]}
      >
        <div className="titlemodal-kasir">Pembayaran</div>
        <div className="modal-kasir">
          <div>Total :</div>
          <div>Rp {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
        </div>
        <div className="modal-kasir">
          <div>Dibayarkan :</div>
          <div>
            <InputNumber style={{ width: 200 }} onChange={handleKembalian} />
          </div>
        </div>
        <div className="modal-kasir" style={{ color: "green" }}>
          <div>Kembalian :</div>
          {kembalian < 0 || kembalian === null ? (
            <Fragment />
          ) : (
            <div>
              Rp {kembalian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
