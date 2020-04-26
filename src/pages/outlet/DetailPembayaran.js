import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Konten from "../../components/detailPembayaran";
import { Layout } from "antd";
import { useParams } from "react-router-dom";

export default function DetailPembayaran() {
  const token = localStorage.getItem("token");

  const { id } = useParams();

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
      <Navbar />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            columns={columns}
            store="umkm"
            linkback={`/outlet/detail-toko/${id}`}
            linkselesai="/outlet"
            linkpost="/outlet/beli-produk"
            from={id}
            token={token}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
