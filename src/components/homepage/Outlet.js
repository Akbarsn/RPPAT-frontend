import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Layout, Row, Col, Card, Table } from "antd";

import './Outlet.scss';

export default function Outlet() {
    const column = [
        {
            title: 'Transaksi',
            dataIndex: 'transaksi',
            key: 'transaksi',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
    ]

    const data = [
        {
            key: '1',
            transaksi: 'Pembelian Kripik Apel',
            total: 'Rp. 5.000.000'
        },
        {
            key: '2',
            transaksi: 'Penjualan Kripik Apel',
            total: 'Rp. 6.000.000'
        },

    ]


    return (
        <Layout style={{ backgroundColor: '#ffffff' }}>
            <Navbar />
            <Layout style={{ marginTop: 64, marginLeft: 400 }}>
                <Sidebar></Sidebar>
                <Layout.Content style={{ marginLeft: '1rem', minHeight:'100vh'}}>

                    <span className="title">Beranda</span>

                    <Row justify="space-around" gutter={[24, 48]}>
                        <Col span={11}>
                            <Card className="card">
                                <Row>
                                    <Col><span className="title">Total Stok : </span></Col>
                                </Row>
                                <Row>
                                    <Col offset={5} className="content">20.000 Produk</Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={11}>
                            <Card className="card">
                                <Row>
                                    <Col><span className="title">Keuntungan : </span></Col>
                                </Row>
                                <Row>
                                    <Col offset={5} className="content">Rp. 5.000.000,00</Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row justify="space-around" gutter={[24, 48]}>
                        <Col span={23}>
                            <Card className="card">
                                <span className="title">Riwayat Transaksi : </span>
                                <Table columns={column} dataSource={data} id="table"></Table>
                            </Card>
                        </Col>
                    </Row>

                </Layout.Content>
            </Layout>
        </Layout>
    )
}
