import React, {useState, useEffect} from "react";
import Homepage from "../components/homepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { Layout } from "antd";

export default function Home() {
  const[data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const respone = await axios.get(
        '/petani/homepage'
      );
      setData(respone.data);
    })(data);
  }, [data]);

  const column = [
    {
      title: "Transaksi",
      dataIndex: "transaksi",
      key: "transaksi"
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total"
    }
  ];

  const datas = [
    {
      key: "1",
      transaksi: "Penjualan Apel Manalagi Grade A",
      total: "Rp. 5.000.000"
    },
    {
      key: "2",
      transaksi: "Penjualan Apel Rome Beauty Grade D",
      total: "Rp. 6.000.000"
    }
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content style={{ minHeight: "100vh" }}>
          <Homepage
            card1={{ title: "Total Stok", content: "20.000 Unit" }}
            card2={{ title: "Keuntungan", content: "Rp. 6.000.000" }}
            table={{ title: "Riwayat Transaksi", column: column, data: datas }}
          ></Homepage>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
