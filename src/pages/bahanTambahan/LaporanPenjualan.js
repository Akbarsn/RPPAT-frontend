import React from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";

export default function LaporanPenjualan() {
  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "center",
      name: "Jenis Apel",
    },
    {
      align: "center",
      name: "Grade",
    },
    {
      align: "center",
      name: "Jumlah",
    },
    {
      align: "center",
      name: "Satuan",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  const rows = [
    {
      data: [
        {
          value: "1",
          align: "center",
        },
        {
          value: "Apel Manalagi",
          align: "center",
        },
        {
          value: "A",
          align: "center",
        },
        {
          value: "200",
          align: "center",
        },
        {
          value: "Kilogram",
          align: "center",
        },
        {
          value: 1_000_000,
          align: "right",
        },
      ],
    },
    {
      data: [
        {
          value: "1",
          align: "center",
        },
        {
          value: "Apel Manalagi",
          align: "center",
        },
        {
          value: "A",
          align: "center",
        },
        {
          value: "200",
          align: "center",
        },
        {
          value: "Kilogram",
          align: "center",
        },
        {
          value: 1_000_000,
          align: "right",
        },
      ],
    },
    {
      data: [
        {
          value: "1",
          align: "center",
        },
        {
          value: "Apel Manalagi",
          align: "center",
        },
        {
          value: "A",
          align: "center",
        },
        {
          value: "200",
          align: "center",
        },
        {
          value: "Kilogram",
          align: "center",
        },
        {
          value: 1_000_000,
          align: "right",
        },
      ],
    },
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={2} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            name="Penjualan"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: true,
            }}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
