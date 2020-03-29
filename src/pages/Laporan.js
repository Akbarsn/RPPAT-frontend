import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function Laporan() {
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
      title: "Jenis Apel",
      dataIndex: "jenisApel",
      key: "jenisApel",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Satuan",
      dataIndex: "satuan",
      key: "satuan",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Total Harga",
      dataIndex: "totalHarga",
      key: "totalharga",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      no: "1",
      jenisApel: "Apel Manalagi",
      grade: "A",
      jumlah: "200",
      satuan: "Kilogram",
      totalHarga: "Rp. 2.000.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      jenisApel: "Apel Fuji",
      grade: "B",
      jumlah: "100",
      satuan: "Kilogram",
      totalHarga: "Rp. 750.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      jenisApel: "Apel Rome Beauty",
      grade: "D",
      jumlah: "300",
      satuan: "Kilogram",
      totalHarga: "Rp. 1.000.000",
      size: 20
    }
  ];

  const handleSubmit = () => {};

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content style={{  minHeight: "100vh", backgroundColor:"white" }}>
          <Konten
            name="Stok Panen"
            isThereButton={true}
            table={{ columns: column, data: data }}
            handleSubmit={handleSubmit}
            firstItem="Jenis Apel"
            fields={[
              {
                label: "Grade",
                name: "grade",
                type: "select",
                options: [
                  { name: "A", value: "A" },
                  { name: "B", value: "B" },
                  { name: "C", value: "C" },
                  { name: "D", value: "D" },
                  { name: "E", value: "E" }
                ]
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number"
              },
              {
                label: "Satuan",
                name: "unit",
                type: "text"
              },
              {
                label: "Harga per Satuan",
                name: "price",
                type: "number"
              }
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
