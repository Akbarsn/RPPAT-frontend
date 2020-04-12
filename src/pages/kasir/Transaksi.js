import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import Transaksi from "../../components/Transaksi/index";

export default function Transaction() {
  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Kasir"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={5} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Transaksi />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
