import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Toko from "../components/DetailToko/index";

export default function DetailToko() {

  const dummy = [
    {
      id: 1,
      nama: "Minyak Goreng",
      stok: 1000,
      harga: 11000,
      qty: 0
    },
    {
      id: 2,
      nama: "Natrium Benzoat",
      stok: 2000,
      harga: 1100,
      qty: 0
    },
    {
        id: 3,
        nama: "Sorbitol",
        stok: 500,
        harga: 700,
        qty: 0
      },

  ];

  const test= (data) => {
    console.log("databayar" + data);
  }
  
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
          <Toko nama = "Toko" data={dummy} dataBayar={test}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
