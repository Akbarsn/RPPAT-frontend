import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import BeliBahan from '../components/Beli/Beli';

export default function Beli() {
  
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
          <BeliBahan/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
