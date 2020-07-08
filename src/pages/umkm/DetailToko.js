import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Toko from "../../components/DetailToko/index";
import API from "../API";
import { useParams } from "react-router-dom";

export default function DetailToko() {
  const [nama, setNama] = useState('')
  let gambar = "";
  const [rows, setRows] = useState([]);
  const [bankAccount, setBankAccount] = useState([]);
  const [bankDetail, setBankDetail] = useState([]);

  const token = localStorage.getItem("token");
  const { id, store } = useParams();
  const jenisToko = store;
  const link = `/umkm/detail-pembayaran/${store}/${id}`;

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
      console.log(account);
      let no = 0;
      let insideacc = [];
      for (let i = 0; i < account.length; i++) {
        let temp;
        temp = {
          index: ++no,
          name: account[i]
        }
        insideacc.push(temp)
      }
      console.log(insideacc)
      let number = result.data.data.bankNumber.split("-");
      let insidenum = [];
      number.map((item) => {
        let temp2 = item.split("_")
        let temp;
        temp = {
          number: temp2[0],
          name: temp2[1],
        };
        insidenum.push(temp);
      });
      setBankDetail(insidenum)
      setBankAccount(insideacc);
      no = 0;
      let inside = [];
      if (jenisToko === "baku") {
        result.data.data.apples.map((item) => {
          let temp;
          temp = {
            id: item.id,
            item: item.item,
            grade: item.grade,
            qty: item.qty,
            sellPrice: item.sellPrice,
            buyPrice: item.buyPrice,
            unit: item.unit,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      } else if (jenisToko === "tambahan") {
        result.data.data.materials.map((item) => {
          let temp;
          temp = {
            id: item.id,
            item: item.item,
            qty: item.qty,
            unit: item.unit,
            sellPrice: item.sellPrice,
            buyPrice: item.buyPrice,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      } else {
        result.data.data.packages.map((item) => {
          let temp;
          temp = {
            id: item.id,
            item: item.item,
            qty: item.qty,
            sellPrice: item.sellPrice,
            buyPrice: item.buyPrice,
            unit: item.unit,
            owner: item.owner,
            inputdata: 0,
          };
          inside.push(temp);
        });
      }
      setRows(inside);
      let namaa = result.data.data.name;
      setNama(namaa);
      console.log(nama);
      gambar = result.data.data.profilImage;
    };

    fetchData();
  }, []);

  const GenerateLinkBack = (store) => {
    switch (store) {
      case "baku":
        return "bahan-baku";
        break;
      case "tambahan":
        return "bahan-tambahan";
        break;
      case "kemasan":
        return "kemasan";
        break;
    }
  }

  let linkback = "/umkm/beli-stok/" + GenerateLinkBack(store)

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={3} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white", marginTop:60 }}>
          <Toko nama={nama} data={rows} link={link} store={store} bankName={bankAccount} bankDetail={bankDetail}
            linkback={linkback} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
