import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Spin, message } from "antd";
import API from "../API";

export default function LaporanProduksi() {
  const [rows, setrows] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/umkm/laporan/produksi", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stock = [];
      let no = 0;
      let temp = 0;
      result.data.data.map((item) => {
        let inside = [];
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
                value: item.weight,
                align: "center",
              };
              inside.push(temp);
              break;
            case 4:
              temp = {
                value: item.buyPrice,
                align: "right",
              };
              inside.push(temp);
              break;
            case 5:
              temp = {
                value: item.sellPrice,
                align: "right",
              };
              inside.push(temp);
              break;
          }
        }
        stock.push({
          data: inside,
        });
      });

      setrows(stock);
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
      name: "Nama Produk",
    },
    {
      align: "center",
      name: "Jumlah",
    },
    {
      align: "center",
      name: "Satuan Kemasan",
    },
    {
      align: "right",
      name: "Harga Beli Per Kemasan",
    },
    {
      align: "right",
      name: "Harga Jual Per Kemasan",
    },
  ];

  const handleSubmit = async (value) => {
    try {
      setLoading(true);
      console.log(value);
      const result = await API.post("/umkm/laporan", value, {
        headers: {
          Authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      });

      if (result.status == 200) {
        console.log(result);
        setLoading(false);
        window.location.reload();
      } else {
        setLoading(false);
        message.error("Terjadi kesalahan, silahkan mengulangi lagi");
      }
    } catch (e) {}
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={3} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Spin tip="Loading..." size="large" spinning={loading}>
            <Konten
            resep={true}
            notitle={true}
              name="Produksi"
              table={{
                columns: columns,
                rows: rows,
                isPaginate: true,
                isTotal: false,
              }}
              handleSubmit={handleSubmit}
              isThereButton={true}
              firstItem="Jenis Produk Olahan"
              fields={[
                {
                  label: "Satuan Kemasan",
                  name: "weight",
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
          </Spin>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
