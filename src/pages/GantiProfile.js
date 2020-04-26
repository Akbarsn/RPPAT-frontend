import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import RubahProfile from "../components/GantiProfile";
import moment from "moment";
import API from "./API";
import jwt from "jsonwebtoken";

export default function GantiProfile() {
  const [data, setData] = useState([]);
  let oldpassword;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/ganti-profile", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      if (result) {
        const bankAcc = result.data.data.bankAccount.split("-");
        const bankNum = result.data.data.bankNumber.split("-");
        let banks = [];

        for (let i = 0; i < bankAcc.length; i++) {
          let temp = {
            bankAcc: bankAcc[i],
            bankNumber: bankNum[i],
          };

          banks.push(temp);
        }
        const date = moment(result.data.data.birthDate);

        const data = {
          name: result.data.data.name,
          fullName: result.data.data.fullName,
          address: result.data.data.address,
          birthDate: date,
          phoneNumber: result.data.data.phoneNumber,
          email: result.data.data.email,
          username: result.data.data.username,
          banks: banks,
        };
        oldpassword = result.data.data.password;
        console.log();
        setData(data);
      }
    };

    fetchData();
  }, []);

  // const banks = [
  //   {
  //     bankAcc: "BNI",
  //     bankNumber: "087654347",
  //   },
  // ];

  // const data = {
  //   name: "Akbar",
  //   fullName: "Akbar Satya Nugraha",
  //   address: "Jalan Jalan",
  //   birthDate: date,
  //   phoneNumber: "08123124123",
  //   email: "akbar@gmail.com",
  //   username: "akbarsn",
  //   password: "123",
  //   banks: banks,
  // };

  const onFinish = async (value) => {
    let bankAcc = "";
    let bankNumber = "";

    value.banks.map((bank) => {
      bankAcc += bank.bankAcc + "-";
      bankNumber += bank.bankNumber + "-";
    });

    bankAcc = bankAcc.substring(0, bankAcc.length - 1);
    bankNumber = bankNumber.substring(0, bankNumber.length - 1);

    const data = { ...value, bankAcc, bankNumber };
    data.name = value.fullName.split(" ")[0];
    if (data.password === undefined) {
      delete data.password;
    }
    delete data.banks;

    console.log(data);
    const result = await API.post("/ganti-profile", data, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (result) {
      var decoded = jwt.decode(token);
      console.log(decoded);

      localStorage.setItem("name", value.fullName.split(" ")[0]);

      switch (decoded.role) {
        case 0:
          window.location.replace("/petani");
          break;
        case 1:
          window.location.replace("/pemasok-kemasan");
          break;
        case 2:
          window.location.replace("/pemasok-bahan-tambahan");
          break;
        case 3:
          window.location.replace("/umkm");
          break;
        case 4:
          window.location.replace("/outlet");
          break;
      }
    }
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={parseInt(role)} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <RubahProfile data={data} onFinish={onFinish} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
