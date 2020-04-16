import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Notifikasi from "../components/Notifikasi/index";

export default function LihatStok() {

  const data = [
    {
      id: 1,
      content: "Pembelian Kripik Apel dari Toko Budi",
      date: "1 hari yang lalu",
      detail: [{
        data: [
          {
            value: "1",
            align: "center",
          },
          {
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
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
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
          },
        ],
      }],
      modalType:2,
      metodePembayaran:[{index:1, bankacc:"BCA", banknum:"098978788", bankname:"Anjing"}, {index:2, bankacc:"BNI", banknum:"098978781", bankname:"Gatau"}, {index:3, bankacc:"Mandiri", banknum:"098978783", bankname:"Asu"}]
    },
    {
      id: 2,
      content: "Pembelian Apel dari Toko Budi",
      date: "3 hari yang lalu",
      detail: [{
        data: [
          {
            value: "1",
            align: "center",
          },
          {
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
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
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
          },
        ],
      }],
      modalType:1,
      metodePembayaran:[{index:1, bankacc:"BCA", banknum:"098978788", bankname:"Anjing"}, {index:2, bankacc:"BNI", banknum:"098978781", bankname:"Gatau"}, {index:3, bankacc:"Mandiri", banknum:"098978783", bankname:"Asu"}]
    },
    {
      id: 3,
      content: "Pembelian Natrium Benzoat dari Toko Budi",
      date: "4 hari yang lalu",
      detail: [{
        data: [
          {
            value: "1",
            align: "center",
          },
          {
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
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
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
          },
        ],
      }],
      modalType:3,
      metodePembayaran:[{index:1, bankacc:"BCA", banknum:"098978788", bankname:"Anjing"}, {index:2, bankacc:"BNI", banknum:"098978781", bankname:"Gatau"}, {index:3, bankacc:"Mandiri", banknum:"098978783", bankname:"Asu"}]
    },
    {
      id: 4,
      content: "Pembelian Kripik Apel dari Toko Budi",
      date: "10 hari yang lalu",
      detail: [{
        data: [
          {
            value: "1",
            align: "center",
          },
          {
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
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
            value: "Natrium Benzoat 100g",
            align: "left",
          },
          {
            value: "5",
            align: "center",
          },
          {
            value: 50000,
            align: "right",
          },
        ],
      }],
      modalType:2,
      metodePembayaran:[{index:1, bankacc:"BCA", banknum:"098978788", bankname:"Anjing"}, {index:2, bankacc:"BNI", banknum:"098978781", bankname:"Gatau"}, {index:3, bankacc:"Mandiri", banknum:"098978783", bankname:"Asu"}]
    }
  ];

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Barang",
    },
    {
      align: "center",
      name: "Qty",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Notifikasi data = {data} columns={columns}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
