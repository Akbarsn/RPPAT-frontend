import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function LaporanStokKemasan() {
  const column = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Barang",
      dataIndex: "item",
      key: "item",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Ukuran",
      dataIndex: "size",
      key: "size",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Jumlah",
      dataIndex: "qty",
      key: "qty",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Satuan",
      dataIndex: "unit",
      key: "unit",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Harga Beli",
      dataIndex: "buyPrice",
      key: "buyPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    },
    {
      title: "Harga Jual",
      dataIndex: "sellPrice",
      key: "sellPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.fontSize }}>{value}</span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      no: "1",
      item: "Kemasan Plastik 4 x 4",
      size: "cm",
      qty: "200",
      unit: "lembar",
      buyPrice: "Rp. 200",
      sellPrice: "Rp. 210",
      fontSize: 20
    },
    {
      key: "2",
      no: "2",
      item: "Kemasan Karton 15 x 15",
      size: "cm",
      qty: "200",
      unit: "lembar",
      buyPrice: "Rp. 200",
      sellPrice: "Rp. 210",
      fontSize: 20
    },
    {
      key: "3",
      no: "3",
      item: "Kemasan Plastik 10 x 10",
      size: "cm",
      qty: "200",
      unit: "lembar",
      buyPrice: "Rp. 200",
      sellPrice: "Rp. 210",
      fontSize: 20
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 400 }}>
        <Sidebar role={0} />
        <Layout.Content style={{ marginLeft: "1.5rem", minHeight: "100vh" }}>
          <Konten
            name="Stok Kemasan"
            isThereButton={true}
            table={{ columns: column, data: data }}
            handleSubmit={handleSubmit}
            firstItem="Jenis Kemasan"
            fields={[
              {
                label: "Ukuran",
                name: "size",
                type: "text"
              },
              {
                label: "Harga Belu",
                name: "buyPrice",
                type: "number"
              },
              {
                label: "Satuan",
                name: "unit",
                type: "text"
              },
              {
                label: "Harga Belu",
                name: "buyPrice",
                type: "number"
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number"
              }
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
