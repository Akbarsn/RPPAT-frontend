import React from 'react'
import { Menu, Layout, Avatar, Col, Row } from "antd";
import "./Sidebar.scss"

import {
    UserOutlined, BookOutlined, InfoCircleOutlined,
    ShoppingCartOutlined, TransactionOutlined, UserAddOutlined
}
    from "@ant-design/icons";
import SubMenu from 'antd/lib/menu/SubMenu';


export default function Sidebar() {
    return (
        <Layout.Sider style={{
            minHeight: '100vh',
            position: 'fixed',
            left: 0,
        }} width='400' id='sidebar'>
            <div id="photoProfile">
                <Col className="center">
                    <Avatar size={80} icon={<UserOutlined />} style={{ display: 'block' }} />
                </Col>

                <Col>
                    <span className="header">Outlet</span>
                </Col>

                <div id="divider"></div>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                id="sidebar"
            >

                <SubMenu key="laporan" className="item"
                    title={
                        <Row align="middle">
                            <BookOutlined className='primary' />
                            <span className="primary text">Laporan</span>
                        </Row>
                    }>

                    <Menu.Item className="secondary">Penjualan</Menu.Item>
                    <Menu.Item className="secondary">Pembelian</Menu.Item>
                </SubMenu>

                <Menu.Item className='item primary'>
                    <Row align="middle">
                        <InfoCircleOutlined className="primary" />
                        Lihat Stok
                    </Row>
                </Menu.Item>

                <Menu.Item className="item primary">
                    <Row align="middle">
                        <ShoppingCartOutlined className="primary" />
                        Beli Stok
                    </Row>
                </Menu.Item>

                <Menu.Item className="item primary">
                    <Row align="middle">
                        <TransactionOutlined className="primary" />
                        Riwayat Transaksi
                    </Row>
                </Menu.Item>

                <Menu.Item className="item primary">
                    <Row align="middle">
                        <UserAddOutlined className="primary" />
                        Tambah Kasir
                    </Row>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}
