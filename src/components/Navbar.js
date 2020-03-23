import React from 'react'
import { Menu, Row, Col, Layout, Dropdown } from 'antd'
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {

    const menu = (
        < Menu >
            <Menu.Item key="editProfile" >
                <Link to='/edit-profile'>Ganti Profile</Link>
            </Menu.Item >

            <Menu.Item key="logOut">
                <Link to='/edit-profile'>Keluar</Link>
            </Menu.Item>
        </Menu >
    )

    return (
        <Layout.Header>
            <Row justify='end'>
                <Col span={5}>
                    <Dropdown overlay={menu}>
                        <a id="greetItem" onClick={e => e.preventDefault()}>
                            Hello Akbar
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>
    )
}
