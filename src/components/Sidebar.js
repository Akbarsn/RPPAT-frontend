/* eslint-disable default-case */
import React from "react";
import { Menu, Layout, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import {
  BookOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  TransactionOutlined,
  UserAddOutlined,
  UnorderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import Image from './Sidebar Image';

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
      name = "Not found";
      break;
  }
  return name;
}

function getMenu(role) {
  let menu;
  switch (role) {
    case 0:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/petani">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/petani/laporan/penjualan">
                Penjualan
              </Link>
            </Menu.Item>

            <Menu.Item className="secondary">
              <Link className="link" to="/petani/laporan/stok-panen">
                Stok Panen
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Link className="link" to="/petani/lihat-stok">
              <Row align="middle">
                <InfoCircleOutlined className="primary" />
                Lihat Stok
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/petani/riwayat-transaksi">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Riwayat Transaksi
              </Row>
            </Link>
          </Menu.Item>
        </Menu>
      );
      break;
    case 1:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-kemasan">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/pemasok-kemasan/laporan/penjualan">
                Penjualan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/pemasok-kemasan/laporan/stok-kemasan">
                Stok Kemasan
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-kemasan/lihat-stok">
              <Row align="middle">
                <InfoCircleOutlined className="primary" />
                Lihat Stok
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-kemasan/riwayat-transaksi">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Riwayat Transaksi
              </Row>
            </Link>
          </Menu.Item>
        </Menu>
      );
      break;
    case 2:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-bahan-tambahan">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link
                className="link"
                to="/pemasok-bahan-tambahan/laporan/penjualan"
              >
                Penjualan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link
                className="link"
                to="/pemasok-bahan-tambahan/laporan/pembelian"
              >
                Pembelian
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-bahan-tambahan/lihat-stok">
              <Row align="middle">
                <InfoCircleOutlined className="primary" />
                Lihat Stok
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/pemasok-bahan-tambahan/riwayat-transaksi">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Riwayat Transaksi
              </Row>
            </Link>
          </Menu.Item>
        </Menu>
      );
      break;
    case 3:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/umkm">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/laporan/penjualan">
                Penjualan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/laporan/pembelian">
                Pembelian
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/laporan/produksi">
                Produksi
              </Link>
            </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/lihat-stok/bahan-baku">
                Bahan Baku
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/lihat-stok/bahan-tambahan">
                Bahan Tambahan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/lihat-stok/kemasan">
                Kemasan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/lihat-stok/produk">
                Produk
              </Link>
            </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/beli-stok/bahan-baku">
                Bahan Baku
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/beli-stok/bahan-tambahan">
                Bahan Tambahan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/umkm/beli-stok/kemasan">
                Kemasan
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Link className="link" to="/umkm/riwayat-transaksi">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Riwayat Transaksi
              </Row>
            </Link>
          </Menu.Item>
        </Menu>
      );
      break;
    case 4:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/outlet">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
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
            <Menu.Item className="secondary">
              <Link className="link" to="/outlet/laporan/penjualan">
                Penjualan
              </Link>
            </Menu.Item>
            <Menu.Item className="secondary">
              <Link className="link" to="/outlet/laporan/pembelian">
                Pembelian
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item className="item primary">
            <Link className="link" to="/outlet/lihat-stok">
              <Row align="middle">
                <InfoCircleOutlined className="primary" />
                Lihat Stok
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link classname="link" to="/outlet/beli-stok">
              <Row align="middle">
                <ShoppingCartOutlined className="primary" />
                Beli Produk
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/outlet/riwayat-transaksi">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Riwayat Transaksi
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/outlet/tambah-kasir">
              <Row align="middle">
                <UserAddOutlined className="primary" />
                Tambah Kasir
              </Row>
            </Link>
          </Menu.Item>
        </Menu>
      );
      break;
    case 5:
      menu = (
        <Menu mode="inline" id="sidebar">
          <Menu.Item className="item primary">
            <Link className="link" to="/kasir">
              <Row align="middle">
                <HomeOutlined className="primary" />
                Beranda
              </Row>
            </Link>
          </Menu.Item>
          <Menu.Item className="item primary">
            <Link className="link" to="/kasir">
              <Row align="middle">
                <TransactionOutlined className="primary" />
                Transaksi
              </Row>
            </Link>
          </Menu.Item>

          <Menu.Item className="item primary">
            <Link className="link" to="/kasir/daftar-barang">
              <Row align="middle">
                <UnorderedListOutlined className="primary" />
                Daftar Barang
              </Row>
            </Link>
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
        overflowY:"scroll",
        top:0,
        bottom:0,
        left: 0,
      }}
      width="280"
      id="sidebar"
    >
      <div id="photoProfile" style={{
        marginTop:80
      }}>
      <Col>
          <span className="header">{getRole(props.role)}</span>
        </Col>
        <Col className="center">
        <Image/>
        </Col>
        <Col id="nama">
          <p id="detail">{localStorage.getItem("name")}</p>
          <p id = "detail">{localStorage.getItem("address")}</p>
        </Col>

        <div id="divider"></div>
      </div>

      {getMenu(props.role)}
    </Layout.Sider>
  );
}
