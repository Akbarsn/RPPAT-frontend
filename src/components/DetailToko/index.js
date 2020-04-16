import React from "react";
import "./DetailToko.scss";
import { Button, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Tabel from "../Table";

export default function Index(props) {
  const page = [10, 20, 30];

  return (
    <div id="detailtoko">
      <div className="titlepage">
        <p>Detail {props.nama}</p>
      </div>
      <div className="namatoko">
        <div style={{display:"inline"}}><Avatar size={80} icon={<UserOutlined />} /></div>
        <div style={{display:"inline", marginLeft:"2%"}}>Toko Budi</div>
      </div>
      <div className="tablestok">
        <Tabel
          toggleTotal={false}
          rows={props.rows}
          columns={props.columns}
          pagination={page}
        />
      </div>
      <div className="buttongroupbeli">
        <Button className="btn_secondary">Kembali</Button>
        <Button className="btn_primary">Selanjutnya</Button>
      </div>
    </div>
  );
}
