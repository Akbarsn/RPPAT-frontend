import React from "react";
import { Menu, Layout, Avatar, Col, Row } from "antd";
import "./Sidebar.scss";

import {
  UserOutlined,
  BookOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  TransactionOutlined,
  UserAddOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

function getRole(role) {
  let name;
  switch (role) {
    case 0:
      name = "Petani";
      break;
    case 1:
      name = "Pemasok Kemasan";
      break;
    case 2:
      name = "Pemasok Bahan Tambahan";
      break;
    case 3:
      name = "UMKM";
      break;
    case 4:
      name = "Outlet";
      break;
    case 5:
      name = "Kasir";
      break;
      default:
      name="Not found";
      break;
  }
  return name;
}

function getMenu(role) {
  let menu;
  switch (role) {
    case 0:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <SubMenu
            key="laporan"
            className="item"
            title={
              <Row align="middle">
                <BookOutlined className="primary" />
                <span className="primary text">Laporan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Penjualan</Menu.Item>
            <Menu.Item className="secondary">Stok Panen</Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Row align="middle">
              <InfoCircleOutlined className="primary" />
              Lihat Stok
            </Row>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Row align="middle">
              <TransactionOutlined className="primary" />
              Riwayat Transaksi
            </Row>
          </Menu.Item>
        </Menu>
      );
      break;
    case 1:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <SubMenu
            key="laporan"
            className="item"
            title={
              <Row align="middle">
                <BookOutlined className="primary" />
                <span className="primary text">Laporan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Penjualan</Menu.Item>
            <Menu.Item className="secondary">Stok Kemasan</Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Row align="middle">
              <InfoCircleOutlined className="primary" />
              Lihat Stok
            </Row>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Row align="middle">
              <TransactionOutlined className="primary" />
              Riwayat Transaksi
            </Row>
          </Menu.Item>
        </Menu>
      );
      break;
    case 2:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <SubMenu
            key="laporan"
            className="item"
            title={
              <Row align="middle">
                <BookOutlined className="primary" />
                <span className="primary text">Laporan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Penjualan</Menu.Item>
            <Menu.Item className="secondary">Pembelian</Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Row align="middle">
              <InfoCircleOutlined className="primary" />
              Lihat Stok
            </Row>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Row align="middle">
              <TransactionOutlined className="primary" />
              Riwayat Transaksi
            </Row>
          </Menu.Item>
        </Menu>
      );
      break;
    case 3:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <SubMenu
            key="laporan"
            className="item"
            title={
              <Row align="middle">
                <BookOutlined className="primary" />
                <span className="primary text">Laporan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Penjualan</Menu.Item>
            <Menu.Item className="secondary">Pembelian</Menu.Item>
            <Menu.Item className="secondary">Produksi</Menu.Item>
          </SubMenu>

          <SubMenu
            key="lihat"
            className="item"
            title={
              <Row align="middle">
                <InfoCircleOutlined className="primary" />
                <span className="primary text">Lihat Stok</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Bahan</Menu.Item>
            <Menu.Item className="secondary">Produk</Menu.Item>
          </SubMenu>

          <SubMenu
            key="beli"
            className="item"
            title={
              <Row align="middle">
                <ShoppingCartOutlined className="primary" />
                <span className="primary text">Beli Bahan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Bahan Baku</Menu.Item>
            <Menu.Item className="secondary">Bahan Tambahan</Menu.Item>
            <Menu.Item className="secondary">Kemasan</Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Row align="middle">
              <TransactionOutlined className="primary" />
              Riwayat Transaksi
            </Row>
          </Menu.Item>
        </Menu>
      );
      break;
    case 4:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <SubMenu
            key="laporan"
            className="item"
            title={
              <Row align="middle">
                <BookOutlined className="primary" />
                <span className="primary text">Laporan</span>
              </Row>
            }
          >
            <Menu.Item className="secondary">Penjualan</Menu.Item>
            <Menu.Item className="secondary">Pembelian</Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
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
      );
      break;
    case 5:
      menu = (
        <Menu defaultSelectedKeys={["1"]} mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Row align="middle">
              <TransactionOutlined className="primary" />
              Transaksi
            </Row>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Row align="middle">
              <UnorderedListOutlined className="primary" />
              Daftar Barang
            </Row>
          </Menu.Item>
        </Menu>
      );
      break;
  }
  return menu;
}

export default function Sidebar(props) {
  return (
    <Layout.Sider
      style={{
        minHeight: "100vh",
        position: "fixed",
        left: 0
      }}
      width="280"
      id="sidebar"
    >
      <div id="photoProfile">
        <Col className="center">
          <Avatar
            size={80}
            icon={<UserOutlined />}
            style={{ display: "block" }}
          />
        </Col>

        <Col>
          <span className="header">{getRole(props.role)}</span>
        </Col>

        <div id="divider"></div>
      </div>

      {getMenu(props.role)}

    </Layout.Sider>
  );
}
