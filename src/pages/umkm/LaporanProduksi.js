import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function LaporanProduksi() {
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
      title: "Harga Satuan",
      dataIndex: "price",
      key: "price",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      no: "1",
      item: "Kripik Apel",
      qty: "200",
      unit: "500 gr",
      price: "Rp. 20.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Pai Apel",
      qty: "200",
      unit: "300 gr",
      price: "Rp. 30.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Dodol",
      qty: "200",
      unit: "400 gr",
      price: "Rp. 10.000",
      size: 20
    }
  ];

  const handleSubmit = () => {};

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content style={{  minHeight: "100vh" }}>
          <Konten
            name="Produksi"
            isThereButton={true}
            table={{ columns: column, data: data }}
            handleSubmit={handleSubmit}
            firstItem="Jenis Barang"
            fields={[
              {
                label: "Satuan",
                name: "unit",
                type: "text"
              },

              {
                label: "Harga Satuan",
                name: "price",
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
