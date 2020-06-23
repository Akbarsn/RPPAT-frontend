import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Modal, Button, Row, Form, Input, Col, Select } from "antd";
import Lihat from "../../components/lihatstok/index2";
import API from "../API";

export default function LihatStok() {
  const [rows, setRows] = useState([]);
  const [visible, setVisible] = useState(0);

  const token = localStorage.getItem("token");

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
      result.data.data.map((item) => {
        ++no;
        let temp;
        let inside = [];
        for (let i = 0; i < 8; i++) {
          switch (i) {
            case 0:
              temp = {
                value: no,
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
                value: item.buyPrice,
                align: "center",
              };
              inside.push(temp);
              break;
            case 6:
              temp = {
                value: item.sellPrice,
                align: "center",
              };
              inside.push(temp);
              break;
            case 7:
              temp = {
                value: "button",
                id: item.id
              };
              inside.push(temp);
              break;
          }
        }
        stok.push({ data: inside });
      });
      setRows(stok);
    };

    fetchData();
  }, []);

  const columns = [
    {
      align: "center",
      name: "No",
      label: "no"
    },
    {
      align: "center",
      name: "Jenis Apel",
      label: "item"
    },
    {
      align: "center",
      name: "Grade",
      label: "grade"
    },
    {
      align: "center",
      name: "Jumlah",
      label: "qty"
    },
    {
      align: "center",
      name: "Satuan",
      label: "unit"
    },
    {
      align: "right",
      name: "Harga Pokok Penjualan",
      label: "buyPrice"
    },
    {
      align: "right",
      name: "Harga per Satuan",
      label: "sellPrice"
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={0} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Lihat
            title="Persediaan Apel" token={token} aksi={true}
            rows={rows} columns={columns} linkpost="/petani/lihat-stok"
            token={token} role={0}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
