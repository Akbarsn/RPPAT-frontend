import React from "react";
import Konten from "../../components/TambahKasir";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";

export default function TambahKasir() {
  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "center",
      name: "Nama Lengkap",
    },
    {
      align: "center",
      name: "Username",
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
          value: "Budi Setiadi",
          align: "center",
        },
        {
          value: "budi123",
          align: "center",
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
          value: "Budi Setiadi",
          align: "center",
        },
        {
          value: "budi123",
          align: "center",
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
          value: "Budi Setiadi",
          align: "center",
        },
        {
          value: "budi123",
          align: "center",
        },
      ],
    },
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten columns={columns} rows={rows}></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
