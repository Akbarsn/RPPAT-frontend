import React, { useState, useEffect } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function LaporanStokKemasan() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/kemasan/laporan/stok-kemasan", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stock = [];
      let no = 0;
      result.data.data.map((item) => {
        let inside = [];
        let temp = {};

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
        stock.push({ data: inside });
      });

      setRows(stock);
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
      name: "Jenis Kemasan",
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
      align: "center",
      name: "Harga Beli per Satuan",
    },
    {
      align: "center",
      name: "Harga Jual per Satuan",
    },
  ];

  const handleSubmit = async (value) => {
    try {
      const data = {
        item: value.item + " " + value.size,
        qty: value.qty,
        unit: value.unit,
        buyPrice: value.buyPrice,
        sellPrice: value.sellPrice,
      };

      const result = await API.post("/kemasan/laporan", data, {
        headers: {
          Authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      });

      console.log(result);

      if (result.status) {
        window.location.reload();
      }
    } catch (e) {}
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={1} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            name="Stok Kemasan"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: false,
            }}
            handleSubmit={handleSubmit}
            isThereButton={true}
            firstItem="Jenis Kemasan"
            fields={[
              {
                label: "Ukuran",
                name: "size",
                type: "text",
              },
              {
                label: "Satuan",
                name: "unit",
                type: "text",
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number",
              },
              {
                label: "Harga Beli",
                name: "buyPrice",
                type: "number",
              },
              {
                label: "Harga Jual",
                name: "sellPrice",
                type: "number",
              },
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
