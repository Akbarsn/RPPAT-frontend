import React from "react";
import "./Card.scss";
import { Button, Avatar } from "antd";
import { Link } from "react-router-dom";

export default function Beli(props) {
  const data = props.data;

  return (
    <div id="cardtoko">
    <div className="role-beli">
      <p>{data.role}</p>
    </div>
      <div className="titlecard">
        <Avatar size={42} style={{ display: "inline-block" }} />
        <p
          className="titletoko"
          style={{ display: "inline-block", verticalAlign: "top" }}
        >
          {data.nama}
        </p>
      </div>
      <div className="stok">
        <p className="stoktoko">Stok :</p>
        <div className="liststok">
        {data.stok.map(stocks => {return (
          <div className="listbarang" key={stocks}>
                <p >{stocks.barang}</p>
                <p >{stocks.jumlah}</p>
            
          </div>
          )})}
          <div className="listbarang">
            <p>. . .</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button className="btn_primary">
          <Link to={data.link}>
            Lihat
          </Link>
        </Button>
      </div>
    </div>
  );
}
