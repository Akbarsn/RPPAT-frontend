import React from "react";
import "./DetailToko.scss";
import { Button } from "antd";
import Tabel from "../Table";

export default function Index(props) {
  const page = [10, 20, 30];

  return (
    <div id="detailtoko">
      <div className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
        <p>Detail {props.nama}</p>
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
