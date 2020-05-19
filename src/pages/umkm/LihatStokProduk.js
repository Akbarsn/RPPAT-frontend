import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Lihat from "../../components/lihatstok/index2";
import API from "../API";

export default function LihatStokProduk() {
  const [rows, setRows] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/umkm/lihat-stok/produk", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      result.data.data.map((item) => {
        let inside = [];
        let temp;
        for (let i = 0; i < 7; i++) {
          switch (i) {
            case 0:
              temp = {
                value: ++no,
                align: "center"
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
                align: "right",
              };
              inside.push(temp);
              break;
            case 5:
              temp = {
                value: item.sellPrice,
                align: "right",
              };
              inside.push(temp);
              break;
            case 6:
              temp = {
                value: "button",
                id:item.id
              };
              inside.push(temp);
              break;
          }
        }
        stok.push({ data: inside });
      });

      setRows(stok);
    };

    fetchData();
  }, []);

  const columns = [
    {
      align: "center",
      name: "No",
      label: "no",
    },
    {
      align: "left",
      name: "Nama Produk",
      label: "item",
    },
    {
      align: "center",
      name: "Jumlah",
      label: "qty",
    },
    {
      align: "center",
      name: "Satuan Kemasan",
      label: "weight",
    },
    {
      align: "right",
      name: "Harga Beli per Kemasan",
      label: "buyPrice",
    },
    {
      align: "right",
      name: "Harga Jual per Kemasan",
      label: "sellPrice",
    },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar/>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={3} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Lihat title="Persediaan Produk" token = {token} rows={rows} columns={columns} linkpost="/umkm/lihat-stok/produk" aksi={true}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
