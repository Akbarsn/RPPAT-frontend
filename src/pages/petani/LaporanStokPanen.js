import React, {useState, useEffect} from "react";
import Konten from "../components/laporan";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import axios from 'axios';

export default function LaporanStokPanen() {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState();

  useEffect(() => {
    (async () => {
      const respone = await axios.get(
        '/petani/laporan/penjualan'
      );
      setData(respone.data);
    })(data);
  }, [data]);
  
  const column = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Jenis Apel",
      dataIndex: "item",
      key: "item",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Jumlah",
      dataIndex: "qty",
      key: "qty",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Satuan",
      dataIndex: "unit",
      key: "unit",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    },
    {
      title: "Harga Satuan",
      dataIndex: "price",
      key: "price",
      render: (value, record) => (
        <span style={{ fontSize: record.size }}>{value}</span>
      )
    }
  ];

  const datas = [
    {
      key: "1",
      no: "1",
      item: "Apel Manalagi",
      grade: "A",
      qty: "200",
      unit: "Kilogram",
      price: "Rp. 50.000",
      size: 20
    },
    {
      key: "2",
      no: "2",
      item: "Apel Fuji",
      grade: "B",
      qty: "100",
      unit: "Kilogram",
      price: "Rp. 30.000",
      size: 20
    },
    {
      key: "3",
      no: "3",
      item: "Apel Rome Beauty",
      grade: "D",
      qty: "300",
      unit: "Kilogram",
      price: "Rp. 10.000",
      size: 20
    }
  ];

  async function handleSubmit () {
    try {
      let hasil = await axios.post(
        "http://31.220.50.154:5000//petani/laporan",
        newData
      );
    } catch (e) {
      switch (e.response) {
        default:
          console.log("berhasil");
          break;
      }
    }
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={0} />
        <Layout.Content style={{  minHeight: "100vh" }}>
          <Konten
            name="Stok Panen"
            isThereButton={true}
            table={{ columns: column, data: datas }}
            handleSubmit={handleSubmit}
            onFinishForm={data=>setNewData(data)}
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
                  { name: "E", value: "E" }
                ]
              },
              {
                label: "Jumlah",
                name: "qty",
                type: "number"
              },
              {
                label: "Satuan",
                name: "unit",
                type: "text"
              },
              {
                label: "Harga per Satuan",
                name: "price",
                type: "number"
              }
            ]}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
