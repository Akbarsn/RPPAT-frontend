import React, { useEffect, useState } from "react";
import Homepage from "../../components/homepage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [rows, setRows] = useState([]);
  const [selling, setSelling] = useState(0);
  const [shopping, setShopping] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/petani", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log("API")
      console.log(result);

      let stocks = [];

      result.data.data.allStock.map((item) => {
        const temp = {
          item: item.item + " Grade " + item.grade,
          qty: item.qty,
          unit: item.unit,
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
                value: item.forSeller,
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

      setSelling(result.data.data.selling);
      setShopping(result.data.data.shopping);
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
        <Sidebar role={0} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Homepage
            stocks={stocks}
            unit="Unit"
            isBuying={false}
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
