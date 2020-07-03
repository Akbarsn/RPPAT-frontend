import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import BeliBahan from "../../components/Beli/Beli";
import { useRouteMatch, BrowserRouter as Route, Link } from "react-router-dom";
import API from "../API";

export default function Beli() {
  const [cardData, setCardData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/outlet/beli-produk", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let card = [];

      let temp = {};
      result.data.data.map((store) => {
        let stocks = [];
        let count = 0;
        if (store.products.length != 0) {
          store.products.map((stock) => {
            if (count == 3) {
            } else {
              if (stock.type == 1) {
                temp = {
                  barang: stock.item,
                  jumlah: stock.qty,
                };
                stocks.push(temp);
                count++;
              }
            }
          });
          temp = {
            link: "/outlet/detail-toko/" + store.id,
            role: "UMKM",
            nama: "Toko " + store.name,
            stok: stocks,
          };

          card.push(temp);
        }
      });

      setCardData(card);
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
        <Layout.Content style={{ backgroundColor: "white", marginTop:60 }}>
          <BeliBahan
            nama="Produk"
            search="Cari produk disini"
            data={cardData}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
