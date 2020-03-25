import React from "react";
import Homepage from "../components/homepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";

export default function Home() {


  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar name={"Kasir"} />
      <Layout style={{ marginTop: 64, marginLeft: 400 }}>
        <Sidebar role={5} />
        <Layout.Content style={{ marginLeft: "1rem", minHeight: "100vh" }}>
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
