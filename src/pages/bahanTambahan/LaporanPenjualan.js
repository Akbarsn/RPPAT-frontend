import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function LaporanPenjualan() {
  const [rows, setrows] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/bahan-tambahan/laporan/penjualan", {
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
        allItem.map((item) => {
          let inside = [];
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
                  value: item.price * item.qty,
                  align: "right",
                };
                inside.push(temp);
                break;
            }
          }
          buying.push({ data: inside });
        });
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
      <Navbar />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={2} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            notitle={true}
            name="Penjualan"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: true,
            }}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
