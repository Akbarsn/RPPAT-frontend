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
        <p className="titlebarang">{data.item}</p>
        <p className="beratbarang">{data.weight}</p>
        </div>
        <div className="hargabarang">
            <p className="hargabarang">Rp. {data.sellPrice}</p>
        </div>
    </div>
  );
}
