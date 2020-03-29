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
      title: "Jumlah",
      dataIndex: "qty",
      key: "qty",
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
      title: "Harga Satuan",
      dataIndex: "price",
      key: "price",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Total Harga",
      dataIndex: "total",
      key: "total",
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
      price: "Rp. 15.000",
      total: "Rp. 2.000.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Pai Apel",
      qty: "100",
      unit: "800 gr",
      price: "Rp. 25.000",
      total: "Rp. 1.000.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Dodol",
      qty: "70",
      unit: "200 gr",
      price: "Rp. 5.000",
      total: "Rp. 500.000",
      size: 20
    }
  ];

  const handleSubmit = () => {};

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content style={{  minHeight: "100vh" }}>
          <Konten
            name="Penjualan"
            isThereButton={false}
            table={{ columns: column, data: data }}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
