import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Layout } from "antd";

const { Sider, Header, Content } = Layout
export default function HomepageOutlet() {
    return (
        <Layout>
            <Sider>
                <Sidebar></Sidebar>
            </Sider>
            <Layout>
                <Navbar/>

                <Content>
                    <h1>
                        This is a Homepage Outlet
                    </h1>
                </Content>
            </Layout>
        </Layout>
    )
}
