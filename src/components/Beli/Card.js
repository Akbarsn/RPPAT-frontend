import React from "react";
import "./Card.scss";
import { Button, Avatar } from "antd";

export default function Beli(props) {
  return (
    <div className="cardtoko">
      <div className="titlecard">
        <Avatar size={42} style={{ display: "inline-block" }} />
        <p
          className="titletoko"
          style={{ display: "inline-block", verticalAlign: "top" }}
        >
          Toko Budi
        </p>
      </div>
      <div className="stok">
        <p className="stoktoko">Stok :</p>
        <div className="liststok">
          <div className="listbarang">
            <p>Minyak Goreng</p>
            <p>300</p>
          </div>
          <div className="listbarang">
            <p>. . .</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button className="btn_primary" size={"large"}>Lihat</Button>
      </div>
    </div>
  );
}
