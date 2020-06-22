import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Daftar from "../../components/DaftarBarang/index";
import API from "../API";

export default function DaftarBarang() {

  // const data = [
  //     {
  //       nama: "Kripik Apel",
  //       berat: "500 gr",
  //       harga: "20.000"
  //     },
  //   ];

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={5} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Daftar />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
