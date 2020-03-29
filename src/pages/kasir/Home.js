import React from "react";
import Homepage from "../components/homepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function Home() {


  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Kasir"} />
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={5} />
        <Layout.Content style={{ minHeight: "100vh" }}>
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
