import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Button } from "antd";
import Lihat from "../../components/lihatstok/index-outlet";
import API from "../API";

export default function LihatStok() {
  const [rows, setRows] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/outlet/lihat-stok", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      let inside = [];
      result.data.data.map((item) => {
        let temp = {
          no: ++no,
          id: item.id,
          item: item.item,
          itemImage: item.itemImage,
          qty: item.qty,
          weight: item.weight,
          buyPrice: item.buyPrice,
          sellPrice: item.sellPrice,
          align: "left",
        };
        stok.push(temp);
      });
      setRows(stok);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Lihat 
          title="Persediaan Produk" data={rows} linkpost="/outlet/lihat-stok" 
          token={token} role={4}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
