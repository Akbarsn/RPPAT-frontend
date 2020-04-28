import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Spin, message } from "antd";
import API from "../API";

export default function LaporanPembelian() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/bahan-tambahan/laporan/pembelian", {
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
      name: "Jenis Bahan Tambahan",
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
      name: "Harga Beli per Satuan",
    },
    {
      align: "right",
      name: "Harga Jual per Satuan",
    },
  ];

  const handleSubmit = async (value) => {
    try {
      setLoading(true);
      const result = await API.post("/bahan-tambahan/laporan", value, {
        headers: {
          Authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      });

      console.log(result);

      if (result.status) {
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
        <Sidebar role={2} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Spin tip="Loading..." size="large" spinning={loading}>
            <Konten
              name="Pembelian"
              table={{
                columns: columns,
                rows: rows,
                isPaginate: true,
                isTotal: false,
              }}
              handleSubmit={handleSubmit}
              isThereButton={true}
              firstItem="Nama Bahan Tambahan"
              fields={[
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
          </Spin>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
