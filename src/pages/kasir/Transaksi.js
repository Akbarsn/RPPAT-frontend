import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Transaksi from "../../components/Transaksi/index";
import API from "../API";

export default function Transaction() {
  const [data, setdata] = useState([]);
  const token = "";

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/kasir", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (result) {
        let items = result.data.data.map;
        setdata(items);
      }
    };
    fetchData();
  }, []);

  async function handleSubmit(data) {
    const result = await API.post("/kasir", data, {
      headers: {
        Authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
    });

    if (result.status == 200) {
      window.location.reload();
    }
  }

  // const datas = [
  //   {
  //     id: 1,
  //     item: "Kripik Apel",
  //     weight: "500 gr",
  //     price: 25000,
  //   },
  //   { id: 2, item: "Kripik Nanas", weight: "400 gr", price: 10000 },
  //   { id: 3, item: "Sari Buah", weight: "10 liter", price: 15000 },
  //   { id: 4, item: "Kerupuk", weight: "1000 gr", price: 20000 },
  // ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Kasir"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={5} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Transaksi data={data} handleSubmit={handleSubmit} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
