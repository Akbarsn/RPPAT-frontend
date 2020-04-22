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
  const jenisToko = localStorage.getItem("store");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get(`/umkm/detail-toko/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(result);
      let no = 0;
      let inside = [];
      if (jenisToko === "baku") {
        result.data.data.apples.map((item) => {
          let temp;
          temp = {
            id: ++no,
            item: item.item,
            grade: item.grade,
            qty: item.qty,
            price: item.price,
            unit: item.unit,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      } else if (jenisToko === "tambahan") {
        result.data.data.materials.map((item) => {
          let temp;
          temp = {
            id: ++no,
            item: item.item,
            qty: item.qty,
            unit: item.unit,
            sellPrice: item.sellPrice,
            buyPrice: item.buyPrice,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      } else {
        result.data.data.packages.map((item) => {
          let temp;
          temp = {
            id: ++no,
            item: item.item,
            qty: item.qty,
            sellPrice: item.sellPrice,
            buyPrice: item.buyPrice,
            unit: item.unit,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      }
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
          <Sidebar role={3} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Toko nama={nama} data={rows} link="/umkm/detail-pembayaran" />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
