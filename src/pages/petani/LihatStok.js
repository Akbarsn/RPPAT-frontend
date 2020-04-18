import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Lihat from "../../components/lihatstok/index";

export default function LihatStok() {

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
      name: "Stok"
    },
    {
      align: "center",
      name: "Satuan per Kemasan"
    },
    {
      align: "center",
      name: "Harga per Kemasan"
    }
  ];


  const rows = [
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Minyak Goreng",
          align: "left"
        },
        {
          value: "2000",
          align: "center"
        },
        {
          value: "1000 gr",
          align: "center"
        },
        {
          value: "Rp. 20.000",
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Minyak Goreng",
          align: "left"
        },
        {
          value: "2000",
          align: "center"
        },
        {
          value: "1000 gr",
          align: "center"
        },
        {
          value: "Rp. 20.000",
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Minyak Goreng",
          align: "left"
        },
        {
          value: "2000",
          align: "center"
        },
        {
          value: "1000 gr",
          align: "center"
        },
        {
          value: "Rp. 20.000",
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Minyak Goreng",
          align: "left"
        },
        {
          value: "2000",
          align: "center"
        },
        {
          value: "1000 gr",
          align: "center"
        },
        {
          value: "Rp. 20.000",
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Minyak Goreng",
          align: "left"
        },
        {
          value: "2000",
          align: "center"
        },
        {
          value: "1000 gr",
          align: "center"
        },
        {
          value: "Rp. 20.000",
          align: "center"
        }
      ]
    }

  ]
  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={0} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Lihat title="Stok Apel" rows={rows} columns ={columns} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
