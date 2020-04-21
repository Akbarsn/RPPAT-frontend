import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Lihat from "../../components/lihatstok/index";
import API from '../API';

export default function LihatStok() {

  const [rows, setRows] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6MywiaWF0IjoxNTg3MDkzMzk4fQ.7ebbcyp6H9SxRaDjgiUdBKZk6m80lqkn37R6o0OU47M";
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/petani/lihat-stok", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      let inside = [];
      result.data.data.map((item) => {
        let temp;
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
                align: "left",
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
        });
      stok.push({data:inside});

      setRows(stok);
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


  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={0} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Lihat title="Stok Apel" rows={rows} columns ={columns} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
