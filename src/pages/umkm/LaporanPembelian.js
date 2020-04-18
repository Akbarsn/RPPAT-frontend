import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function LaporanPembelian() {
  const [rows, setrows] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6MywiaWF0IjoxNTg3MDkzMzk4fQ.7ebbcyp6H9SxRaDjgiUdBKZk6m80lqkn37R6o0OU47M";
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/umkm/laporan/pembelian", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let buying = [];
      let no = 0;
      result.data.data.map((item) => {
        const allItem = JSON.parse(item.itemDetail);
        let temp;
        let inside = [];
        allItem.map((item) => {
          for (let i = 0; i < 5; i++) {
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
                  align: "center",
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
                  value: (item.price ? item.price : item.sellPrice) * item.qty,
                  align: "right",
                };
                inside.push(temp);
                break;
            }
          }
        });
        buying.push({data:inside});
      });

      setrows(buying);
    };

    fetchData();
  }, []);

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "center",
      name: "Nama Barang",
    },
    {
      align: "center",
      name: "Jumlah",
    },
    {
      align: "center",
      name: "Satuan",
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
            name="Pembelian"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: true,
            }}
            isThereButton={false}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
