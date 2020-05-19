import React, { useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Konten from "../../components/detailPembayaran";
import { Layout } from "antd";
import { useParams } from "react-router-dom";

export default function DetailPembayaran() {
  const token = localStorage.getItem("token");
  const {id, store} = useParams()
  
  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Nama Produk",
    },
    {
      align: "center",
      name: "Kuantitas",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  const columns2 = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Nama Produk",
    },
    {
      align:"center",
      name:"Grade"
    },
    {
      align: "center",
      name: "Kuantitas",
    },
    {
      align: "right",
      name: "Total",
    },
  ];


  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar/>
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={3} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          
          <Konten
            columns={store==="baku" ? columns2 : columns}
            store={store}
            linkback = {`/umkm/detail-toko/${store}/${id}`}
            linkselesai = "/umkm"
            linkpost = "/umkm/beli-bahan"
            from = {id}
            token = {token}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
