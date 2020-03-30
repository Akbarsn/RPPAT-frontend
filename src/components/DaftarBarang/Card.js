import React, { useState } from "react";
import "./Card.scss";
import { Card, Avatar } from "antd";

export default function Index(props) {

    const data = props.data;

  return (
    <div className="cardbarang" style={{textAlign: "center"}}>
    <div>
    <Avatar size={90}  /> 
    </div>
    <div className="namaberat">
        <p className="titlebarang">{data.nama}</p>
        <p className="beratbarang">{data.berat}</p>
        </div>
        <div className="hargabarang">
            <p className="hargabarang">Rp. {data.harga}</p>
        </div>
    </div>
  );
}
