import React, { useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Konten from "../../components/detailPembayaran";
import { Layout } from "antd";
import API from '../API';
import { useParams } from "react-router-dom";

export default function DetailPembayaran() {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("idtoko");
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


  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={3} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          
          <Konten
            columns={columns}
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
