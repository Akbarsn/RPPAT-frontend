import React from 'react'
import './AdminHomepage.scss'
import { Row, Col, Card } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function index(props) {
    return (
        <div id="admin">
            <Row justify="space-around">
                <Col span={22}>
                    <div className="admin-title">
                        Dashboard
                </div>

                    <div id="admin-content">
                        <Row justify="space-around">
                            <Col>
                                <div className="admin-sub">
                                    Jumlah User
                                </div>
                            </Col>
                        </Row>

                        {/* ChartPlace */}
                        <Row justify="space-around">
                            <BarChart width={1100} height={500} data={props.data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="Jumlah" fill="#82ca9d" />
                            </BarChart>
                        </Row>


                        <Row gutter={16} align="middle" justify="space-between">
                            <Col span={4}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.count.farmer}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Pemasok Baku Apel <br />
                                            (Petani dan Tengkulak)
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.count.material}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Pemasok Bahan Tambahan
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.count.package}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Pemasok Bahan Kemasan
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.count.product}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            UMKM Pengolah Apel
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.count.outlet}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Outlet Produk Apel
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>

                        <Row justify="space-around">
                            <Col>
                                <div className="admin-sub">
                                    Jenis Ketersediaan
                                </div>
                            </Col>
                        </Row>

                        <Row gutter={24} align="middle" justify='space-between'>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.type.apple}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Jenis Bahan Baku Apel
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.type.product}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Jenis / Item Produk Olahan Apel
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        {props.type.material}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Jenis Bahan Tambahan
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>

                        <Row justify="space-around">
                            <Col>
                                <div className="admin-sub">
                                    Cashflow
                                </div>
                            </Col>
                        </Row>

                        <Row gutter={24} align="middle" justify='space-between'>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        Rp. {props.cash.buy.toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Total Biaya
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        Rp. {props.cash.sell.toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Total Penjualan
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card className="admin-card">
                                    <Col className="card-main">
                                        Rp. {props.cash.difference.toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </Col>

                                    <Row justify="space-around">
                                        <Col className="card-detail">
                                            Nilai Tambah
                                </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
