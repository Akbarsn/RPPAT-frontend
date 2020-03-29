import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function LaporanPembelian() {
  const column = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Barang",
      dataIndex: "item",
      key: "item",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Jumlah",
      dataIndex: "qty",
      key: "qty",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Satuan",
      dataIndex: "unit",
      key: "unit",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Harga Beli",
      dataIndex: "buyPrice",
      key: "buyPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Harga Jual",
      dataIndex: "sellPrice",
      key: "sellPrice",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      no: "1",
      item: "Natrium Benzoat",
      qty: "10",
      unit: "Kilogram",
      buyPrice: "Rp. 10.000",
      sellPrice: "Rp. 12.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Minyak Goreng",
      qty: "80",
      unit: "Liter",
      buyPrice: "Rp. 20.000",
      sellPrice: "Rp. 22.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Sorbitol",
      qty: "100",
      unit: "gram",
      buyPrice: "Rp. 15.000",
      sellPrice: "Rp. 17.000",
      size: 20
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Bahan Tambah"} />
      <Layout style={{ marginTop: 64, marginLeft:280}}>
        <Sidebar role={2} />
        <Layout.Content style={{ minHeight: "100vh" }}>
          <Konten
            name="Pembelian"
            isThereButton={true}
            table={{ columns: column, data: data }}
            handleSubmit={handleSubmit}
            firstItem="Jenis Bahan Tambah : "
            fields={[
              {
                label: "Satuan",
                name: "unit",
                type: "text"
              },
              {
                label: "Harga Beli",
                name: "buyPrice",
                type: "number"
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number"
              },
              {
                label: "Harga Jual",
                name: "sellPrice",
                type: "number"
              }
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
