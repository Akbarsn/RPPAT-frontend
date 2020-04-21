import React, { useEffect, useState } from "react";
import Konten from "../../components/laporan";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function LaporanStokPanen() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6MCwiaWF0IjoxNTg3MTA2MDI3fQ.kj1O6_Kyw0vNdKYPP5CNWKBABHqSmNSjHW_b5WonTz0";
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
                value: item.price,
                align: "right",
              };
              inside.push(temp);
              break;
          }
        }
        stock.push({data:inside});
      });

      console.log(stock)

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
      name: "Harga per Satuan",
    },
  ];

  const handleSubmit = async (value) => {
    try {
      setLoading(true)
      const result = await API.post("/petani/laporan", value, {
        headers: {
          'Authorization': `bearer ${token}`,
          "content-type": "application/json",
        },
      });

      console.log(result)

      if(result.status){
        window.location.reload()
        setLoading(false)
      }
    } catch (e) {}
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            name="Stok Panen"
            table={{
              columns: columns,
              rows: rows,
              isPaginate: true,
              isTotal: false,
            }}
            handleSubmit={handleSubmit}
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
                label: "Harga per Satuan",
                name: "price",
                type: "number",
              },
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
