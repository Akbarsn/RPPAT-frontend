import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Toko from "../../components/DetailToko/index";
import API from "../API";
import { useParams } from "react-router-dom";

export default function DetailToko() {
  const [nama, setNama] = useState("");
  let gambar = "";
  const [rows, setRows] = useState([]);
  const [bankAccount, setBankAccount] = useState([]);
  const [bankDetail, setBankDetail] = useState([]);

  const token = localStorage.getItem("token");
  const { id } = useParams();
  const link = `/outlet/detail-pembayaran/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get(`/outlet/detail-toko/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(result);

      let account = result.data.data.bankAccount.split("-");
      console.log(account);
      let no = 0;
      let insideacc = [];
      for (let i = 0; i < account.length; i++) {
        let temp;
        temp = {
          index: ++no,
          name: account[i],
        };
        insideacc.push(temp);
      }
      console.log(insideacc);
      let number = result.data.data.bankNumber.split("-");
      let insidenum = [];
      number.map((item) => {
        let temp2 = item.split("_");
        let temp;
        temp = {
          number: temp2[0],
          name: temp2[1],
        };
        insidenum.push(temp);
      });
      setBankDetail(insidenum);
      setBankAccount(insideacc);

      let inside = [];
      result.data.data.products.map((item) => {
        let temp;
        temp = {
          id: item.id,
          item: item.item,
          itemImage: item.itemImage,
          qty: item.qty,
          weight: item.weight,
          buyPrice: item.buyPrice,
          sellPrice: item.sellPrice,
          owner: item.owner,
          inputdata: 0,
        };
        inside.push(temp);
      });
      setRows(inside);
      let namaa = result.data.data.name;
      setNama(namaa);
      gambar = result.data.data.profilImage;
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
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Toko
            nama={nama}
            data={rows}
            link={link}
            store="umkm"
            bankName={bankAccount}
            bankDetail={bankDetail}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
