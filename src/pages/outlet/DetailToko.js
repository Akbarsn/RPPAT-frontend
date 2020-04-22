import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Toko from "../../components/DetailToko/index";
import API from "../API";

export default function DetailToko() {
  let nama = "";
  let gambar = "";
  const [rows, setRows] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("idtoko");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get(`/outlet/detail-toko/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(result);
      let no = 0;
      let inside = [];
      result.data.data.products.map((item) => {
        let temp;
        temp = {
          id: ++no,
          item: item.item,
          itemImage: item.itemImage,
          qty: item.qty,
          weight: item.weight,
          buyPrice: item.buyPrice,
          sellPrice: item.sellPrice,
          owner: item.owner,
          inputdata: 0,
        };
        inside.push(temp);
      });
      setRows(inside);
      nama = result.data.data.name;
      gambar = result.data.data.profilImage;
    };
    fetchData();
  }, []);

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
          <Toko nama={nama} data={rows} link="/outlet/detail-pembayaran" />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
