import React, { useState, Fragment } from "react";
import "./index.scss";
import {
  List,
  Button,
  Modal,
  Pagination,
  Form,
  Upload,
  Card,
  Input,
} from "antd";
import Tabel from "../Table";
import { UploadOutlined } from "@ant-design/icons";
import API from "../../pages/API";

export default function Notif(props) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [visible, setVisible] = useState(0);
  const [typeModal, setTypeModal] = useState(3);
  const [loading, setLoading] = useState(false);
  const role = props.identifier;
  const token = localStorage.getItem("token");

  function handleChange(page, pageSize) {
    if (page <= 1) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(maxValue);
      setMaxValue(page * 9);
    }
  }

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const PembayaranHandler = async (e) => {
    setLoading(true);
    const id = e.target.value;
    const result = await API.post(
      `/${role}/konfirmasi-pembayaran`,
      { id: id },
      {
        headers: {
          Authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );

    if (result.status == 200) {
      setVisible(null);
    }
  };

  const PenerimaanHandler = (e) => {
    console.log(e.target.value);
  };

  const UploadBukti = (value) => {
    console.log(value);
  };

  function getModal(detail, metodeBayar) {
    let footer, content;
    let imagesrc = "http://31.220.50.154:5000/" + metodeBayar.proof;
    if (typeModal === 1) {
      footer = false;
      content = (
        <div>
          <br />
          <div className="titlenotif">Info Pembayaran</div>
          <div>
            <h3>{metodeBayar.metodePembayaran}</h3>
          </div>
          <br />
          <Form onFinish={UploadBukti}>
            <Form.Item name="id">
              <Input type="hidden" value={metodeBayar.id} />
            </Form.Item>

            <Form.Item
              name="upload"
              label={
                <div className="tombol-lihatdetail">
                  Upload Bukti Pembayaran
                </div>
              }
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Pastikan file dalam format .pdf, .png, atau .jpeg"
            >
              <Upload name="logo" listType="picture" accept=".pdf,.png,.jpeg">
                <Button>
                  <UploadOutlined />
                  Klik untuk Upload
                </Button>
              </Upload>
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button className="btn_tertiary" onClick={close}>
                Kembali
              </Button>
              <Button className="btn_primary" htmlType="submit">
                Simpan
              </Button>
            </div>
          </Form>
        </div>
      );
    } else if (typeModal === 2) {
      footer = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button className="btn_tertiary" onClick={close}>
            Tutup
          </Button>
          <Button
            loading={loading}
            className="btn_primary"
            onClick={PembayaranHandler}
            value={metodeBayar.id}
          >
            Konfirmasi
          </Button>
        </div>
      );
      content = (
        <div>
          <br />
          <div className="titlenotif">Bukti Pembayaran</div>
          <Card
            hoverable
            style={{ width: 400 }}
            cover={<img alt="example" src={imagesrc} />}
          />
        </div>
      );
    } else if (typeModal === 3) {
      footer = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button className="btn_tertiary" onClick={close}>
            Tutup
          </Button>
          <Button
            className="btn_primary"
            onClick={PenerimaanHandler}
            value={metodeBayar.id}
          >
            Konfirmasi
          </Button>
        </div>
      );
      content = <Fragment />;
    }
    return (
      <Modal
        title={[
          <div className="title-modalpembayaran">Konfirmasi Penerimaan</div>,
        ]}
        footer={footer}
        visible={visible === metodeBayar.id}
        onCancel={close}
        centered
      >
        <div className="isiModal-notif">
          <Tabel
            columns={props.columns}
            rows={detail}
            togglePagination={false}
            toggleTotal={true}
          />
          {content}
        </div>
      </Modal>
    );
  }

  function handleChange(e) {
    open(e.id);
    setTypeModal(e.modalType);
  }

  function open(id) {
    setVisible(id);
  }

  function close() {
    setVisible(null);
  }

  function ModalType(type) {
    switch (type) {
      case 1:
        return "Upload Bukti Pembayaran";
      case 2:
        return "Konfirmasi Pembayaran";
      case 3:
        return "Konfirmasi Penerimaan";
    }
  }

  return (
    <div className="notif">
      <p className="titlepage" style={{ margin: "1% 2% 1% 2%" }}>
        Notifikasi
      </p>
      <div className="listnotif">
        <List>
          {props.data.slice(minValue, maxValue).map((item) => {
            return (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<p className="titlenotif">{item.content}</p>}
                  description={item.date}
                />
                <div>
                  <Button onClick={() => handleChange(item)}>
                    {ModalType(item.modalType)}
                  </Button>
                </div>
                {getModal(item.detail, item)}
              </List.Item>
            );
          })}
        </List>
      </div>
      <div style={{ textAlign: "center" }}>
        <Pagination
          showTotal={(total, range) => `${range[0]}-${range[1]} dari ${total}`}
          onChange={handleChange}
          total={props.data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
