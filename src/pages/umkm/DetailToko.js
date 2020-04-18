import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Input, Select } from "antd";
import Toko from "../../components/DetailToko";

export default function DetailToko() {
  const datainput = [
    {
      value: "gr",
      text: "gr",
    },
    {
      value: "kg",
      text: "kg",
    },
  ];

  const columns = [
    {
      align: "left",
      name: "Nama Bahan Tambah",
    },
    {
      align: "center",
      name: "Stok",
    },
    {
      align: "center",
      name: "Harga",
    },
    {
      align: "center",
      name: "Beli",
    },
  ];

  const input = (
    <div>
      <Input
        type="number"
        className="inputbeli"
        style={{ display: "inline-block", width: 100 }}
        placeholder="ex: 100"
      />
      <Select
        defaultValue={datainput[0].value}
        className="optionbeli"
        style={{ width: 70, display: "inline-block" }}
      >
        {datainput.map((data) => {
          return (
            <Select.Option key={data} value={data.value}>
              {data.text}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );

  const rows = [
    {
      data: [
        {
          value: "Natrium Benzoat",
          align: "left",
        },
        {
          value: "1000 gr",
          align: "center",
        },
        {
          value: "Rp. 20.0000 / gr",
          align: "center",
        },
        {
          value: input,
          align: "center",
        },
      ],
    },
    {
      data: [
        {
          value: "Sorbitol",
          align: "left",
        },
        {
          value: "100 gr",
          align: "center",
        },
        {
          value: "Rp. 35.000 / gr",
          align: "center",
        },
        {
          value: input,
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
          <Toko nama="Toko" rows={rows} columns={columns} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
