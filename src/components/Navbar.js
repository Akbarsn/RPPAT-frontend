import React from "react";
import { Menu, Row, Col, Layout, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { DownOutlined, BellOutlined } from "@ant-design/icons";

export default function Navbar(props) {

  function handleLogOut() {
      localStorage.clear();
      window.location.replace("/")
  }
  const menu = (
    <Menu>
      <Menu.Item key="editProfile" className="dropdownMenu">
        <Link to="/ganti-profile">Ganti Profile</Link>
      </Menu.Item>

      <Menu.Item key="logOut" className="dropdownMenu" onClick={handleLogOut}>
        Keluar
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header id="navbar">
      <Row justify="space-between">
        <Col span={22}>
          <Row justify="space-between">
            <Col span={3}>
              <span className="navHeader">RPPAT</span>
            </Col>
            <Col xs={10} md={6} sm={9}>
              <Row align="middle" justify="space-around">
                <Col flex={1}>
                  <Link to="/notifikasi">
                    <BellOutlined className="icon" style={{}} />
                  </Link>
                </Col>

                <Col flex={2}>
                  <Dropdown overlay={menu}>
                    <Row align="middle" justify="space-between" id="helloNav">
                      <Col className="navHeader">Hello {props.name}</Col>
                      <Col>
                        <DownOutlined className="icon" />
                      </Col>
                    </Row>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
}
