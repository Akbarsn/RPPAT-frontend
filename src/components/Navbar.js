import React, { useEffect, useState } from "react";
import { Menu, Row, Col, Layout, Dropdown, Badge } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import API from "../pages/API";

import { DownOutlined, BellOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [number, setNumber] = useState(0);
  const outletId = localStorage.getItem("outletId");

  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  function roleName(role) {
    switch (role) {
      case "0":
        return "petani";
      case "1":
        return "kemasan";
      case "2":
        return "bahan-tambahan";
      case "3":
        return "umkm";
      case "4":
        return "outlet";
      default:
        return "-";
    }
  }
  const identifier = roleName(role);

  useEffect(() => {
    const fetchData = async () => {
      let result = await API.get(`/${identifier}/notifikasi`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (result) {
        const n = result.data.data.length;
        setNumber(n);
      }
    };

    fetchData();
  }, []);

  function handleLogOut() {
    localStorage.clear();
    window.location.replace("/");
  }

  const menu = outletId ? (
    <Menu>
      <Menu.Item key="logOut" className="dropdownMenu" onClick={handleLogOut}>
        Keluar
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.ItemGroup title="Profil">
        <Menu.Item key="editProfile" className="dropdownMenu">
          <Link to="/ganti-profile">Ganti Profile</Link>
        </Menu.Item>
      </Menu.ItemGroup>

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
            <Col span={8}>
              <span className="navHeader">Integrated Apple Supply Chain</span>
            </Col>
            <Col xs={10} md={6} sm={9}>
              <Row align="middle" justify="space-around">
                <Col flex={1}>
                  <Link to="/notifikasi">
                    <Badge count={number}>
                      <BellOutlined className="icon" />
                    </Badge>
                  </Link>
                </Col>

                <Col flex={2}>
                  <Dropdown overlay={menu}>
                    <Row align="middle" justify="space-between" id="helloNav">
                      <Col className="navHeader">Hello, {name}</Col>
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
