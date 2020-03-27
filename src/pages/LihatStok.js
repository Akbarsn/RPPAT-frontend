import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Lihat from "../components/lihatstok/index";

export default function LihatStok() {
  const dummy = [
    {
      no: 1,
      barang: "Minyak Goreng",
      jumlah: 1000,
      satuan: "liter",
      harga: "Rp. 11.000"
    },
    {
      no: 2,
      barang: "Natrium Benzoat",
      jumlah: 2000,
      satuan: "kilogram",
      harga: "Rp. 1.100"
    },
    {
        no: 3,
        barang: "Sorbitol",
        jumlah: 500,
        satuan: "gram",
        harga: "Rp. 700"
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
          <Lihat title="Stok Bahan" rows={dummy} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
