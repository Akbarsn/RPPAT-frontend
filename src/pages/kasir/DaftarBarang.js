import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Daftar from "../../components/DaftarBarang/index";

export default function DaftarBarang() {

    const data = [
        {
          nama: "Kripik Apel",
          berat: "500 gr",
          harga: "20.000"
        },
        {
            nama: "Dodol",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Pikachu",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          },
          {
            nama: "Kripik Apel",
            berat: "500 gr",
            harga: "20.000"
          }
      ];
  
  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={5} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Daftar data = {data}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
