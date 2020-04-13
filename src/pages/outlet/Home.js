import React from "react";
import Homepage from "../../components/homepage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";

export default function Home() {
  const stocks = [
    {
      item: "Kripik Apel",
      qty: 200,
    },
    {
      item: "Kripik Apel",
      qty: 200,
    },
    {
      item: "Kripik Apel",
      qty: 200,
    },
  ];

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Transaksi",
    },
    {
      align: "center",
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
          value: "Pembelian Kripik Apel",
          align: "left",
        },
        {
          value: 1_000_000,
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: "2",
          align: "center",
        },
        {
          value: "Pembelian Kripik Apel",
          align: "left",
        },
        {
          value: 1_000_000,
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: "3",
          align: "center",
        },
        {
          value: "Pembelian Kripik Apel",
          align: "left",
        },
        {
          value: 1_000_000,
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
          <Homepage
            stocks={stocks}
            unit="Unit"
            buying={1_000_000}
            selling={2_000_000}
            shopping={3_000_000}
            columns={columns}
            rows={rows}
          ></Homepage>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
