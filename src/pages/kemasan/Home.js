import React from "react";
import Homepage from "../components/homepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function Home() {
  const column = [
    {
      title: "Transaksi",
      dataIndex: "transaksi",
      key: "transaksi"
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total"
    }
  ];

  const data = [
    {
      key: "1",
      transaksi: "Penjualan Kemasan Plastik 4 x 4 cm",
      total: "Rp. 5.000.000"
    },
    {
      key: "2",
      transaksi: "Penjualan Kemasan Karton 10 x 10 cm",
      total: "Rp. 6.000.000"
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={1} />
        <Layout.Content style={{minHeight: "100vh" }}>
          <Homepage
            card1={{ title: "Total Stok", content: "20.000 Unit" }}
            card2={{ title: "Keuntungan", content: "Rp. 6.000.000" }}
            table={{ title: "Riwayat Transaksi", column: column, data: data }}
          ></Homepage>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}