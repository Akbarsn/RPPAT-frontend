import React, { useState } from "react";
import "./LihatStok.scss";
import Tabel from "../Table";

export default function Index(props) {
  return (
    <div className="lihatstok">
      <p className="titlepage">
        Lihat Stok
      </p>
      <p className="sectitle">
        {props.title}
      </p>
      <div className="tablestok">
        <Tabel
          pagination={[5, 10, 15]}
          columns={props.columns}
          rows={props.rows}
          togglePagination={false}
          toggleTotal={false}
        />
      </div>
    </div>
  );
}