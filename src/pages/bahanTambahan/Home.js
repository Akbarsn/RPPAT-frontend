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
      transaksi: "Pembelian Natrium Benzoat",
      total: "Rp. 5.000.000"
    },
    {
      key: "2",
      transaksi: "Penjualan Minyak Goreng",
      total: "Rp. 6.000.000"
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Bahan Tambah"} />
      <Layout style={{ marginTop: 64, marginLeft: 400 }}>
        <Sidebar role={2} />
        <Layout.Content style={{ marginLeft: "1rem", minHeight: "100vh" }}>
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
