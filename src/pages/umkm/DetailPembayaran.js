import React, { useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Konten from "../../components/detailPembayaran";
import { Layout } from "antd";
import API from '../API';

export default function DetailPembayaran() {
  const [bankAccount, setBankAccount] = useState([]);
  const [bankDetail, setBankDetail] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("idtoko");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get(`/umkm/detail-toko/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(result);
      let account = result.data.data.bankAccount.split("-");
      let no = 0;
      let insideacc = [];
        account.map((item) => {
          let temp;
          temp = {
            index : ++no,
            name : item
          };
          insideacc.push(temp);
        });
      let number = result.data.data.bankNumber.split("-");
      let inside = [];
      number.map((item) => {
        let temp2 = item.split("_")
        let temp;
        temp = {
          number: temp2[0],
      name: temp2[1],
        };
        inside.push(temp);
      });
      setBankDetail(inside)
      setBankAccount(insideacc);
    };
    fetchData();
  }, []);
  
  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Nama Produk",
    },
    {
      align: "center",
      name: "Kuantitas",
    },
    {
      align: "right",
      name: "Total",
    },
  ];


  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={3} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten
            bankAccount={bankAccount}
            bankDetail={bankDetail}
            columns={columns}
            linkback = {`/umkm/detail-toko/${id}`}
            linkselesai = "/umkm"
            linkpost = "/umkm/beli-bahan"
            from = {id}
            token = {token}
          ></Konten>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
