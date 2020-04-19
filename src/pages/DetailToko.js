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
      harga: "Rp. 11.000",
      label:"minyakgoreng"
    },
    {
      id: 2,
      nama: "Natrium Benzoat",
      stok: 2000,
      harga: "Rp. 1.100",
      label:"natriumbenzoat"
    },
    {
        id: 3,
        nama: "Sorbitol",
        stok: 500,
        harga: "Rp. 700",
        label:"sorbitol"
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
