import React, { useEffect, useState } from "react";
import Homepage from "../../components/homepage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [rows, setRows] = useState([]);
  const [buying, setBuying] = useState(0);
  const [selling, setSelling] = useState(0);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
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
          unit: "Unit",
        };
        stocks.push(temp);
      });

      setStocks(stocks);

      const history = [];
      let no = 0;
      result.data.data.history.map((item) => {
        let inside = [];
        let temp;
        for (let i = 1; i <= 3; i++) {
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
                value: item.from == id ? item.forSeller : item.forBuyer,
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

      setBuying(result.data.data.buying);
      setSelling(result.data.data.selling);
      } catch (e) {
        switch (e.response) {
          case 403:
            alert("Silahkan Login terlebih dahulu");
            window.location.replace("/");
        }
      }
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
      name: "Transaksi",
    },
    {
      align: "center",
      name: "Total",
    },
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={3} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Homepage
            stocks={stocks}
            unit="Unit"
            isBuying={true}
            buying={buying}
            selling={selling}
            columns={columns}
            rows={rows}
          ></Homepage>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
