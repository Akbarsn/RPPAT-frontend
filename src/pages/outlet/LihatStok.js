import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Lihat from "../../components/lihatstok/index";
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
        let temp;
        for (let i = 0; i < 6; i++) {
          switch (i) {
            case 0:
              temp = {
                value: ++no,
                align: "center",
              };
              inside.push(temp);
              break;
            case 1:
              temp = {
                value: item.item,
                align: "left",
              };
              inside.push(temp);
              break;
            case 2:
              temp = {
                value: item.qty,
                align: "center",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: item.weight,
                align: "center",
              };
              inside.push(temp);
              break;
            case 4:
              temp = {
                value: item.buyPrice,
                align: "left",
              };
              inside.push(temp);
              break;
            case 5:
              temp = {
                value: item.sellPrice,
                align: "left",
              };
              inside.push(temp);
              break;
          }
        }
      });
      stok.push({ data: inside });

      setRows(stok);
    };

    fetchData();
  }, []);

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
      name: "Jumlah",
    },
    {
      align: "center",
      name: "Satuan Kemasan",
    },
    {
      align: "left",
      name: "Harga Beli per Kemasan",
    },
    {
      align: "left",
      name: "Harga Jual per Kemasan",
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
          <Lihat title="Stok Produk" rows={rows} columns={columns} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
