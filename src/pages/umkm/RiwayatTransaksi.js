import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Modal, Button } from "antd";
import Riwayat from "../../components/RiwayatTransaksi";

export default function RiwayatTransaksi() {
  function DataModal(content) {
    Modal.info({
      title: "Detail Transaksi",
      content: <div>{content}</div>,
    });
  }

  function detail(data) {
    return (
      <div>
        <Button className="btn_primary" onClick={() => DataModal(data)}>
          Lihat Detail
        </Button>
      </div>
    );
  }

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
      name: "Tipe",
    },
    {
      align: "center",
      name: "Total",
    },
    {
      align: "center",
      name: "Aksi",
    },
  ];

  const rows = [
    {
      data: [
        {
          value: 1,
          align: "center",
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left",
        },
        {
          value: "Pengeluaran",
          align: "center",
        },
        {
          value: 2000000,
          align: "center",
        },
        {
          value: detail("Membeli Apel Manalagi"),
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: 1,
          align: "center",
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left",
        },
        {
          value: "Pengeluaran",
          align: "center",
        },
        {
          value: 2000000,
          align: "center",
        },
        {
          value: detail("Membeli Apel Manalagi"),
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: 1,
          align: "center",
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left",
        },
        {
          value: "Pengeluaran",
          align: "center",
        },
        {
          value: 2000000,
          align: "center",
        },
        {
          value: detail("Membeli Apel Manalagi"),
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: 1,
          align: "center",
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left",
        },
        {
          value: "Pengeluaran",
          align: "center",
        },
        {
          value: 2000000,
          align: "center",
        },
        {
          value: detail("Membeli Apel Manalagi"),
          align: "center",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={3} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Riwayat
            rows={rows}
            columns={columns}
            total="Rp. 8.000.000"
            masuk="1.000.000"
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
