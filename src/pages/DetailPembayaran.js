import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Konten from "../components/detailPembayaran";
import { Layout } from "antd";

export default function DetailPembayaran() {
  const account = [
    {
      index: 0,
      name: "BCA"
    },
    {
      index: 1,
      name: "BNI"
    },
    {
      index: 2,
      name: "BRI"
    }
  ];

  const detail = [
    {
      number: "0781257912",
      name: "Budi Setyanto"
    },
    {
      number: "0781257912",
      name: "Andi Setyanto"
    },
    {
      number: "0781257912",
      name: "Siti Setyanto"
    }
  ];

  const columns = [
    {
      align: "center",
      name: "No"
    },
    {
      align: "left",
      name: "Barang"
    },
    {
      align: "center",
      name: "Qty"
    },
    {
      align: "left",
      name: "Total Harga"
    }
  ];

  const rows = [
    {
      data: [
        {
          value: "1",
          align: "center"
        },
        {
          value: "Natrium Benzoat 100g",
          align: "left"
        },
        {
          value: "5",
          align: "center"
        },
        {
          value: 50000,
          align: "left",
          type: 1
        }
      ]
    },
    {
      data: [
        {
          value: "2",
          align: "center"
        },
        {
          value: "Natrium Benzoat 100g",
          align: "left"
        },
        {
          value: "5",
          align: "center"
        },
        {
          value: 50000,
          align: "left",
          type: 1
        }
      ]
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            bankAccount={account}
            bankDetail={detail}
            columns={columns}
            rows={rows}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}