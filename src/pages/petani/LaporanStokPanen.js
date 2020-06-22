import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Spin, message } from "antd";
import API from "../API";

export default function LaporanStokPanen() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/petani/laporan/stok-panen", {
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

        for (let i = 0; i < 7; i++) {
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
                value: item.grade,
                align: "center",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: item.qty,
                align: "center",
              };
              inside.push(temp);
              break;
            case 4:
              temp = {
                value: item.unit,
                align: "center",
              };
              inside.push(temp);
              break;
            case 5:
              temp = {
                value: item.buyPrice,
                align: "right",
              };
              inside.push(temp);
              break;
            case 6:
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

      console.log(stock);

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
      name: "Jenis Apel",
    },
    {
      align: "center",
      name: "Grade",
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
      name: "Harga Pokok Penjualan",
    },
    {
      align: "right",
      name: "Harga per Satuan",
    },
  ];

  const handleSubmit = async (value) => {
    try {
      setLoading(true);
      const result = await API.post("/petani/laporan", value, {
        headers: {
          Authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      });

      console.log(result);

      if (result.status == 200) {
        window.location.reload();
        setLoading(false);
      } else {
        setLoading(false);
        message.error("Terjadi kesalahan, silahkan mengulangi lagi");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Spin tip="Loading..." size="large" spinning={loading}>
            <Konten
              notitle={true}
              name="Stok Panen"
              table={{
                columns: columns,
                rows: rows,
                isPaginate: true,
                isTotal: false,
              }}
              onFinish={handleSubmit}
              loading={loading}
              isThereButton={true}
              firstItem="Jenis Apel"
              fields={[
                {
                  label: "Grade",
                  name: "grade",
                  type: "select",
                  options: [
                    { name: "A", value: "A" },
                    { name: "B", value: "B" },
                    { name: "C", value: "C" },
                    { name: "D", value: "D" },
                    { name: "E", value: "E" },
                  ],
                },
                {
                  label: "Jumlah",
                  name: "qty",
                  type: "number",
                },
                {
                  label: "Satuan",
                  name: "unit",
                  type: "text",
                },
                {
                  label: "Harga Pokok Penjualan",
                  name: "buyPrice",
                  type: "number",
                },
                {
                  label: "Harga per Satuan",
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
