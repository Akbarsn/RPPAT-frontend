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
  const id = localStorage.getItem("id");

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
    }
  }
  const identifier = roleName(role);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(`/${identifier}/notifikasi`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      if (result) {
        let allNotif = [];
        result.data.data.map((notif) => {
          let no = 0;
          let stocks = [];
          const itemDetail = JSON.parse(notif.itemDetail);

          itemDetail.map((item) => {
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
                    value: item.qty,
                    align: "center",
                  };
                  inside.push(temp);
                  break;
                case 3:
                  temp = {
                    value: item.price * item.qty,
                    align: "right",
                  };
                  inside.push(temp);
                  break;
              }
            }

            stocks.push({ data: inside });
          });

          let temp = {
            id: notif.id,
            content: notif.from == id ? notif.forSeller : notif.forBuyer,
            date: "",
            modalType: notif.status + 1,
            detail: stocks,
            metodePembayaran: notif.payment,
            identifier: identifier,
            proof: notif.proof,
          };

          allNotif.push(temp);
        });

        // console.log(allNotif)
        setData(allNotif);
      }
    };

    fetchData();
  }, []);

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
      <Navbar />
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={parseInt(role)} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white", marginTop:60 }}>
          <Konten data={data} columns={columns} identifier={identifier} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
