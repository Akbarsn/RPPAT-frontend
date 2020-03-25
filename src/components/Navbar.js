import React from 'react'
import { Menu, Row, Col, Layout, Dropdown } from 'antd'
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { DownOutlined } from "@ant-design/icons";

export default function Navbar(props) {

    const menu = (
        < Menu >
            <Menu.Item key="editProfile" className="dropdownMenu">
                <Link to='/edit-profile'>Ganti Profile</Link>
            </Menu.Item >

            <Menu.Item key="logOut" className="dropdownMenu">
                <Link to='/edit-profile'>Keluar</Link>
            </Menu.Item>
        </Menu >
    )

    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row justify='space-between'>
                <Col span={3}>
                    <span id="navHeader">
                        RPPAT
                        </span>
                </Col>
                <Col span={3}>
                    <Dropdown overlay={menu}>
                        <Row align="middle" id="helloNav">
                            Hello {props.name} <DownOutlined style={{ fontSize: '24px', marginLeft: '24px' }} />
                        </Row>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>
    )
}
