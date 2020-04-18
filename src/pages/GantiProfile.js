import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import RubahProfile from "../components/GantiProfile";
import moment from "moment";

export default function GantiProfile() {
  const date = moment("2017-12-31");

  const banks = [
    {
      bankAcc: "BNI",
      bankNumber: "087654347",
    },
  ];

  const data = {
    name: "Akbar",
    fullName: "Akbar Satya Nugraha",
    address: "Jalan Jalan",
    birthDate: date,
    phoneNumber: "08123124123",
    email: "akbar@gmail.com",
    username: "akbarsn",
    password: "123",
    banks: banks,
  };

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Akbar"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <RubahProfile data={data} onFinish={onFinish} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
