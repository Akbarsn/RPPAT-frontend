import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Notifikasi from "../components/Notifikasi/index";

export default function LihatStok() {

  const data = [
    {
      id: 1,
      content: "Pembelian Kripik Apel dari Toko Budi",
      date: "1 hari yang lalu",
      detail: "Membeli Kripik Apel"
    },
    {
      id: 2,
      content: "Pembelian Apel dari Toko Budi",
      date: "3 hari yang lalu",
      detail: "Membeli Apel"
    },
    {
      id: 3,
      content: "Pembelian Natrium Benzoat dari Toko Budi",
      date: "4 hari yang lalu",
      detail: "Membeli Natrium Benzoat"
    },
    {
      id: 4,
      content: "Pembelian Kripik Apel dari Toko Budi",
      date: "10 hari yang lalu",
      detail: "Membeli Kripik Apel"
    }
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Notifikasi data = {data}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
