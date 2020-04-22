import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Toko from "../components/DetailToko/index";

export default function DetailToko() {

  const dummy = [
    {
      id: 1,
      item: "Minyak Goreng",
      qty: 1000,
      sellPrice: 11000,
      inputdata: 0
    },
    {
      id: 2,
      item: "Natrium Benzoat",
      qty: 2000,
      sellPrice: 1100,
      inputdata: 0
    },
    {
        id: 3,
        item: "Sorbitol",
        qty: 500,
        sellPrice: 700,
        inputdata: 0
      },

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
          <Toko nama = "Budi" data={dummy} link="/detail-pembayaran" initial={{0:0}}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
