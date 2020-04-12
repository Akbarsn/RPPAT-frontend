import React from "react";
import "./LihatStok.scss";
import Tabel from "../Table";

export default function Index(props) {
  return (
    <div id="lihatstok">
      <p className="titlepage" style={{ margin: "1% 2% 3.5% 2%" }}>
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
