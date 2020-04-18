import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import BeliBahan from "../../components/Beli/Beli";
import API from "../API";

export default function Beli() {
  const [cardData, setCardData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6MywiaWF0IjoxNTg3MjExNDMxfQ.N4EQoL37I4yqkFROaUyHw31X2ykIG9ypVrNT3LWi7uI";

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
        store.apples.map((stock) => {
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
          nama: store.name,
          stok: stocks,
        };

        card.push(temp);
      });

      setCardData(card);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
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
