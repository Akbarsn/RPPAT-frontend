import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Riwayat from "../../components/RiwayatTransaksi";
import Tabel from "../../components/Table";
import API from "../API";

export default function RiwayatTransaksi() {
  const [rows, setRows] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/kemasan/riwayat-transaksi", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(result);
      let inside2 = [];
      result.data.data.map((item) => {
        let stock = [];
        let no = 0;
        let inside = [];
        const allItem = JSON.parse(item.itemDetail);
        let temp;
        allItem.map((item) => {
          inside = [];
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
                  value: item.item+" "+(item.grade ? "Grade " + item.grade : " "),
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
                  value: item.unit,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 4:
                temp = {
                  value: (item.price?item.price : (item.from === item.id ? item.buyPrice : item.sellPrice)),
                  align: "center",
                };
                inside.push(temp);
                break;
                case 5:
                temp = {
                  value: (item.price?item.price : (item.from === item.id ? item.buyPrice : item.sellPrice)) * item.qty,
                  align: "right",
                };
                inside.push(temp);
                break;
            }
          }
          stock.push({data: inside});
      })
        no = 0;
        temp = {
          no: ++no,
          name: item.name,
          status: (item.from === item.id ? "Pengeluaran" : "Pemasukan"),
          total: item.total,
          data: stock,
        };
        inside2.push(temp);
        console.log(inside2)
      });
      setRows(inside2)
    };
    
    fetchData();
  }, []);

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
      align: "center",
      name: "Stok",
    },
    {
      align: "center",
      name: "Satuan Kemasan",
    },
    {
      align: "center",
      name: "Harga Satuan",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={1} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Riwayat
            data={rows}
            columns2={columns2}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
