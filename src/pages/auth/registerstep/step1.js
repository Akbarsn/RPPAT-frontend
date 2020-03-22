import React from "react";
import { Radio, Input } from "antd";
import './step1.scss';

export default function Step1(props) {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <div className="step1">
      <p className="step1title">Anda Ingin Daftar Sebagai Apa ?</p>
      <Radio.Group onChange={data=>{props.role(data.target.value)}}>
        <Radio style={radioStyle} value={1}>
          Petani Apel
        </Radio>
        <Radio style={radioStyle} value={2}>
          Pemasok Bahan Tambahan
        </Radio>
        <Radio style={radioStyle} value={3}>
          Pemasok Kemasan
        </Radio>
        <Radio style={radioStyle} value={4}>
          UMKM Pengolah Apel
        </Radio>
        <Radio style={radioStyle} value={5}>
          Retail & Outlet Produk Olahan Apel
        </Radio>
      </Radio.Group>
    </div>
  );
}
