import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Riwayat from '../components/RiwayatTransaksi/index';

export default function RiwayatTransaksi() {
  const dummy = [
    {
      no: 1,
      transaksi: "Pembelian Apel Manalagi",
      tipe: "Pengeluaran",
      harga: "Rp. 2.000.000"
    },
    {
        no: 2,
        transaksi: "Pembelian Natrium Benzoat",
        tipe: "Pengeluaran",
        harga: "Rp. 1.000.000"
      },
      {
        no: 3,
        transaksi: "Pembelian Kemasan Plastik 4x4",
        tipe: "Pengeluaran",
        harga: "Rp. 500.000"
      },
      {
        no: 4,
        transaksi: "Penjualan Kripik Apel",
        tipe: "Pemasukan",
        harga: "Rp. 2.000.000"
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
          <Riwayat rows={dummy} masuk="1.000.000"/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
