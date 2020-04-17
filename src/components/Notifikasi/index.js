import React, { useState, Fragment } from "react";
import "./index.scss";
import { List, Button, Modal, Pagination, Tabs, Form, Upload, Card } from "antd";
import Tabel from "../Table";
import { UploadOutlined } from "@ant-design/icons";

export default function Notif(props) {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [visible, setVisible] = useState(0);
  const [typeModal, setTypeModal] = useState(3);

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

  function getModal(detail, metodeBayar) {
    let footer, content;
    if(typeModal === 1){
      footer = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button className="btn_tertiary" onClick={close}>
            Kembali
          </Button>
          <Button className="btn_primary" onClick={close}>
            Simpan
          </Button>
        </div>
      );
      content = (
        <div>
        <br/>
          <div className="titlenotif">Info Pembayaran</div>
          <div className="body-pembayaran">
            Silahkan pilih salah satu metode pembayaran di bawah ini :
          </div>
          <Tabs defaultActiveKey="1">
            {metodeBayar.metodePembayaran.map((metode) => {
              return (
                <Tabs.TabPane tab={<div className="tombol-lihatdetail">{metode.bankacc}</div>} key={metode.index}>
                  <div className="namabank-pembayaran">{metode.bankacc}</div>
                  <div className="body-pembayaran">
                    Silahkan Transfer ke no Rekening berikut :
                  </div>
                  <div className="namabank-pembayaran">
                    {metode.banknum} atas nama {metode.bankname}
                  </div>
                </Tabs.TabPane>
              );
            })}
          </Tabs>
          <br/>
          <Form>
          <Form.Item
          name="upload"
          label={<div className="tombol-lihatdetail">Upload Bukti Pembayaran</div>}
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Pastikan file dalam format .pdf, .png, atau .jpeg"
        >
          <Upload name="logo" listType="picture" accept=".pdf,.png,.jpeg">
            <Button>
              <UploadOutlined />Klik untuk Upload
            </Button>
          </Upload>
        </Form.Item>
        </Form>
        </div>
      );
    }
    else if(typeModal === 2){
      footer = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button className="btn_tertiary" onClick={close}>
            Tutup
          </Button>
          <Button className="btn_primary" onClick={close}>
            Konfirmasi
          </Button>
        </div>
      );
      content = (
        <div>
        <br/>
          <div className="titlenotif">Bukti Pembayaran</div>
          <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src="https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/merlin_160087014_de761d9a-4360-402d-a15b-ddeff775760d-superJumbo.jpg" />}
  />
        </div>
      );
    }
    else if (typeModal === 3){
      footer = (
        <div style={{ textAlign: "right" }}>
          <Button className="btn_primary" onClick={close}>
            Kembali
          </Button>
        </div>
      );
      content = <Fragment />;
    }
    return (
      <Modal
        title={[<div className="title-modalpembayaran">Detail Transaksi</div>]}
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

  function open(id){
    setVisible(id)
  }

  function close(){
    setVisible(null)
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
                    {item.modalType === 1 ? "Upload Bukti Pembayaran":"Konfirmasi Pembayaran"}
                  </Button>
                </div>
                {getModal(item.detail, item)}
              </List.Item>
            );
          })}
        </List>
      </div>
      <div style={{textAlign:"center"}}>
        <Pagination
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} dari ${total}`
          }
          onChange={handleChange}
          total={props.data.length}
          defaultPageSize={9}
        />
      </div>
    </div>
  );
}
