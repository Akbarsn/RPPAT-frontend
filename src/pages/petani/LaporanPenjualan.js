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
      title: "Jenis Apel",
      dataIndex: "item",
      key: "item",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
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
      item: "Apel Manalagi",
      grade: "A",
      qty: "200",
      unit: "Kilogram",
      total: "Rp. 2.000.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Apel Fuji",
      grade: "B",
      qty: "100",
      unit: "Kilogram",
      total: "Rp. 750.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Apel Rome Beauty",
      grade: "D",
      qty: "300",
      unit: "Kilogram",
      total: "Rp. 1.000.000",
      size: 20
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
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
