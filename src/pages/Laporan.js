import React from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function Laporan() {
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

  const handleSubmit = () => {};

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            name="Stok Panen"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: true,
            }}
            handleSubmit={handleSubmit}
            isThereButton={true}
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
                  { name: "E", value: "E" },
                ],
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number",
              },
              {
                label: "Satuan",
                name: "unit",
                type: "text",
              },
              {
                label: "Harga per Satuan",
                name: "price",
                type: "number",
              },
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
