import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import BeliBahan from "../../components/Beli/Beli";
import API from "../API";

export default function Beli() {
  const [cardData, setCardData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/umkm/beli-bahan/kemasan", {
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
        if (store.packages.length != 0) {
          store.packages.map((stock) => {
            if (count == 3) {
            } else {
              temp = {
                barang: stock.item,
                jumlah: stock.qty,
              };
              stocks.push(temp);
              count++;
            }
          });
          temp = {
            link: "/umkm/detail-toko/kemasan/" + store.id,
            role:"Pemasok Kemasan",
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
      <Layout.Header>
        <Navbar/>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={3} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <BeliBahan
            nama="Kemasan"
            search="Cari kemasan disini"
            data={cardData}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
