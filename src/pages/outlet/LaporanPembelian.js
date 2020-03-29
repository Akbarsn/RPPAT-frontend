import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function LaporanPenjualan() {
  const column = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Barang",
      dataIndex: "item",
      key: "item",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Satuan",
      dataIndex: "unit",
      key: "unit",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Jumlah",
      dataIndex: "qty",
      key: "qty",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Harga Beli",
      dataIndex: "buyPrice",
      key: "buyPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Harga Jual",
      dataIndex: "sellPrice",
      key: "sellPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      no: "1",
      item: "Kripik Apel",
      qty: "200",
      unit: "500 gr",
      buyPrice: "Rp. 10.000",
      sellPrice: "Rp. 12.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Pai Apel",
      qty: "100",
      unit: "800 gr",
      buyPrice: "Rp. 20.000",
      sellPrice: "RP. 22.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Dodol",
      qty: "70",
      unit: "200 gr",
      buyPrice: "Rp. 5.000",
      sellPrice: "RP. 7.000",
      size: 20
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content style={{  minHeight: "100vh" }}>
          <Konten
            name="Pembelian"
            isThereButton={false}
            table={{ columns: column, data: data }}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
