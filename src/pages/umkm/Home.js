import React, { useEffect, useState } from "react";
import Homepage from "../../components/homepage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  let buying = 0;
  let selling = 0;
  let shopping = 0;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6MywiaWF0IjoxNTg3MDkzMzk4fQ.7ebbcyp6H9SxRaDjgiUdBKZk6m80lqkn37R6o0OU47M";

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/umkm", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stocks = [];

      result.data.data.allStock.map((item) => {
        const temp = {
          item: item.item + " " + item.weight,
          qty: item.qty,
        };
        stocks.push(temp);
      });

      setStocks(stocks);

      const history = [];
      let no = 0;
      result.data.data.history.map((item) => {
        let inside = [];
        let temp;
        for (let i = 0; i < 3; i++) {
          switch (i) {
            case 1:
              temp = {
                value: ++no,
                align: "Center",
              };
              inside.push(temp);
              break;
            case 2:
              temp = {
                value: item.name,
                align: "Left",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: item.total,
                align: "Center",
              };
              inside.push(temp);
              break;
          }
        }

        history.push({ data: inside });
      });

      setRows(history);
    };
    setLoading(false);
    fetchData();
  }, []);

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Transaksi",
    },
    {
      align: "center",
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
          <Homepage
            stocks={stocks}
            unit="Unit"
            buying={buying}
            selling={selling}
            shopping={shopping}
            columns={columns}
            rows={rows}
          ></Homepage>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
