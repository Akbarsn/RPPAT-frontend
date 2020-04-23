import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout } from "antd";
import Konten from "../components/Notifikasi/index";
import API from "./API";

export default function Notifikasi() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log(role);

  function roleName(role) {
    console.log(role);
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
        return "Duar";
    }
  }
  const identifier = roleName(role);
  console.log(identifier);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(`/${identifier}/notifikasi`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (result) {
        let allNotif = [];
        result.data.data.map((notif) => {
          let no = 0;
          let stocks = [];
          notif.itemDetail.map((item) => {
            let inside = [];
            for (let i = 0; i < 4; i++) {
              let temp;
              switch (i) {
                case 0:
                  temp = {
                    value: ++no,
                    align: "center",
                  };
                  inside.push(temp);
                  break;
                case 1:
                  temp = {
                    value: item.item,
                    align: "left",
                  };
                  inside.push(temp);
                  break;
                case 2:
                  temp = {
                    value: item.inputdata,
                    align: "center",
                  };
                  inside.push(temp);
                  break;
                case 3:
                  temp = {
                    value: item.total,
                    align: "left",
                  };
                  inside.push(temp);
                  break;
              }
            }

            stocks.push({ data: inside });
          });

          let temp = {
            id: notif.id,
            content: notif.name,
            date: "",
            modalType: notif.status - 1,
            detail: stocks,
            metodePembayaran: notif.payment,
            identifier: identifier,
          };

          allNotif.push(temp);
        });

        setData(data);
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
      metodePembayaran: "Sesuatu",
      identifier: identifier,
    },
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

  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={role} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Konten data={datas} columns={columns} identifier={identifier} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
