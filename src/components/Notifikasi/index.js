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
  message, 
  Empty
} from "antd";
import Tabel from "../Table";
import { UploadOutlined } from "@ant-design/icons";
import API from "../../pages/API";
import { useHistory } from "react-router-dom";

export default function Notif(props) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [visible, setVisible] = useState(0);
  const [typeModal, setTypeModal] = useState(3);
  const [loading, setLoading] = useState(false);
  const [id, setID] = useState(null);
  const role = props.identifier;
  const token = localStorage.getItem("token");
  const history = useHistory();

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
    message.success("Upload Berhasil")
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
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(false);
      message.error(
        "Terjadi kesalahan, mohon untuk reload page dan mengulanginya lagi beberapa saat"
      );
    }
  };

  const PenerimaanHandler = async (e) => {
    setLoading(true);
    const id = e.target.value;

    const result = await API.post(
      `/${role}/konfirmasi-penerimaan`,
      {
        id: id,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (result.status == 200) {
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(false);
      message.error(
        "Terjadi kesalahan, mohon untuk reload page dan mengulanginya lagi beberapa saat"
      );
    }
  };

  const UploadBukti = async (value) => {
    setLoading(true);
    const proof = value.upload[0].originFileObj;

    let form = new FormData();
    form.append("id", id);
    form.append("file", proof);

    const result = await API.post(`/${role}/bayar-transaksi`, form, {
      headers: {
        Authorization: `bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });

    if (result.status == 200) {
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(false);
      message.error(
        "Pembayaran gagal, silahkan reload halaman dan mengulanginya"
      );
    }
  };

  const uploadClick = (e) => {
    setID(e.target.value);
  };

  function getModal(detail, metodeBayar) {
    let footer, content;
    const imagesrc = "http://31.220.50.154:5000/" + metodeBayar.proof;

    const banks = metodeBayar.metodePembayaran.split("-");

    if (typeModal === 1) {
      footer = false;
      content = (
        <div>
          <br />
          <div className="titlenotif">Info Pembayaran</div>
          <div>
            <h3>Silahkan untuk membayar melalui {banks[0]}</h3>
            <br />
            <h2>
              {banks[1]} atas nama {banks[2]}
            </h2>
          </div>
          <br />
          <Form onFinish={UploadBukti}>
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
              <Button
                loading={loading}
                className="btn_primary"
                htmlType="submit"
                value={metodeBayar.id}
                onClick={uploadClick}
              >
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
            loading={loading}
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
          {props.data.length < 1 ? <Empty description={<span>Tidak Ada Notifikasi</span>}/> : props.data.slice(minValue, maxValue).map((item) => {
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
          onChange={handleChange}
          total={props.data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
