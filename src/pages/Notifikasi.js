import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Konten from "../components/Notifikasi/index";
import API from "./API";

export default function Notifikasi() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");
  const role = 1;
  const roleName = () => {
    let name;
    switch (role) {
      case 0:
        name = "petani";
        break;
      case 1:
        name = "kemasan";
        break;
      case 2:
        name = "bahan-tambahan";
        break;
      case 3:
        name = "umkm";
        break;
      case 4:
        name = "outlet";
        break;
    }
    return name;
  };
  const identifier = roleName();

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(`/${identifier}/notifikasi`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (result) {
        let notif = [];

        result.data.data.from.map((item) => {});

        result.data.data.from.map((item) => {});
      }
    };

    fetchData();
  }, []);

  const datas = [
    {
      id: 1,
      content: "Pembelian Kripik Apel dari Toko Budi (Konfirmasi Pembayaran)",
      date: "1 hari yang lalu",
      modalType: 2,
      detail: [
        {
          data: [
            {
              value: "1",
              align: "center",
            },
            {
              value: "Natrium Benzoat 100g",
              align: "left",
            },
            {
              value: "5",
              align: "center",
            },
            {
              value: 50000,
              align: "right",
            },
          ],
        },
        {
          data: [
            {
              value: "2",
              align: "center",
            },
            {
              value: "Natrium Benzoat 100g",
              align: "left",
            },
            {
              value: "5",
              align: "center",
            },
            {
              value: 50000,
              align: "right",
            },
          ],
        },
      ],
      metodePembayaran: [
        { index: 1, bankacc: "BCA", banknum: "098978788", bankname: "Anjing" },
        { index: 2, bankacc: "BNI", banknum: "098978781", bankname: "Gatau" },
        { index: 3, bankacc: "Mandiri", banknum: "098978783", bankname: "Asu" },
      ],
    },
    // {
    //   id: 2,
    //   content: "Pembelian Apel dari Toko Budi (Upload Bukti)",
    //   date: "3 hari yang lalu",
    //   detail: [
    //     {
    //       data: [
    //         {
    //           value: "1",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //     {
    //       data: [
    //         {
    //           value: "2",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //   ],
    //   modalType: 1,
    //   metodePembayaran: [
    //     { index: 1, bankacc: "BCA", banknum: "098978788", bankname: "Anjing" },
    //     { index: 2, bankacc: "BNI", banknum: "098978781", bankname: "Gatau" },
    //     { index: 3, bankacc: "Mandiri", banknum: "098978783", bankname: "Asu" },
    //   ],
    // },
    // {
    //   id: 3,
    //   content:
    //     "Pembelian Natrium Benzoat dari Toko Budi (Konfirmasi Pembayaran)",
    //   date: "4 hari yang lalu",
    //   detail: [
    //     {
    //       data: [
    //         {
    //           value: "1",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //     {
    //       data: [
    //         {
    //           value: "2",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //   ],
    //   modalType: 3,
    //   metodePembayaran: [
    //     { index: 1, bankacc: "BCA", banknum: "098978788", bankname: "Anjing" },
    //     { index: 2, bankacc: "BNI", banknum: "098978781", bankname: "Gatau" },
    //     { index: 3, bankacc: "Mandiri", banknum: "098978783", bankname: "Asu" },
    //   ],
    // },
    // {
    //   id: 4,
    //   content: "Pembelian Kripik Apel dari Toko Budi",
    //   date: "10 hari yang lalu",
    //   detail: [
    //     {
    //       data: [
    //         {
    //           value: "1",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //     {
    //       data: [
    //         {
    //           value: "2",
    //           align: "center",
    //         },
    //         {
    //           value: "Natrium Benzoat 100g",
    //           align: "left",
    //         },
    //         {
    //           value: "5",
    //           align: "center",
    //         },
    //         {
    //           value: 50000,
    //           align: "right",
    //         },
    //       ],
    //     },
    //   ],
    //   modalType: 2,
    //   metodePembayaran: [
    //     { index: 1, bankacc: "BCA", banknum: "098978788", bankname: "Anjing" },
    //     { index: 2, bankacc: "BNI", banknum: "098978781", bankname: "Gatau" },
    //     { index: 3, bankacc: "Mandiri", banknum: "098978783", bankname: "Asu" },
    //   ],
    // },
  ];

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Barang",
    },
    {
      align: "center",
      name: "Qty",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  const PembayaranHandler = () => {};

  const PenerimaanHandler = () => {};

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={0} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Konten
            data={datas}
            columns={columns}
            KonfirmasiPembayaranHandler={PembayaranHandler}
            KonfirmasiPenerimaannHandler={PenerimaanHandler}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
