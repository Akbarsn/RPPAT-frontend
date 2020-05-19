import React, { useState, useEffect } from "react";
import Konten from "../../components/TambahKasir";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import API from "../API";

export default function TambahKasir() {
  const [rows, setrows] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get("/outlet/kasir", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (result) {
        let workers = [];

        let no = 0;
        result.data.data.map((item) => {
          let inside = [];
          let temp;

          for (let i = 0; i < 3; i++) {
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
                  value: item.fullName,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 2:
                temp = {
                  value: item.username,
                  align: "center",
                };
                inside.push(temp);
                break;
            }
          }

          workers.push({ data: inside });
        });

        setrows(workers);
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
      align: "center",
      name: "Nama Lengkap",
    },
    {
      align: "center",
      name: "Username",
    },
  ];

  // const rows = [
  //   {
  //     data: [
  //       {
  //         value: "1",
  //         align: "center",
  //       },
  //       {
  //         value: "Budi Setiadi",
  //         align: "center",
  //       },
  //       {
  //         value: "budi123",
  //         align: "center",
  //       },
  //     ],
  //   },
  //   {
  //     data: [
  //       {
  //         value: "1",
  //         align: "center",
  //       },
  //       {
  //         value: "Budi Setiadi",
  //         align: "center",
  //       },
  //       {
  //         value: "budi123",
  //         align: "center",
  //       },
  //     ],
  //   },
  //   {
  //     data: [
  //       {
  //         value: "1",
  //         align: "center",
  //       },
  //       {
  //         value: "Budi Setiadi",
  //         align: "center",
  //       },
  //       {
  //         value: "budi123",
  //         align: "center",
  //       },
  //     ],
  //   },
  // ];

  const SubmitHandler = async (value) => {
    console.log(value);

    const result = await API.post("/outlet/kasir", value, {
      headers: {
        Authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
    });

    if (result.status == 200) {
      window.location.reload();
    }
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Navbar/>
      <Layout style={{ marginTop: 64, marginLeft: 280 }}>
        <Sidebar role={4} />
        <Layout.Content
          style={{ minHeight: "100vh", backgroundColor: "white" }}
        >
          <Konten columns={columns} rows={rows} onFinish={SubmitHandler} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
