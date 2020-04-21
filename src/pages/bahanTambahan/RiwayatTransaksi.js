import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Modal, Button } from "antd";
import Riwayat from "../../components/RiwayatTransaksi/index";
import Tabel from "../../components/Table";
import API from "../API";

export default function RiwayatTransaksi() {
  const [visible, setVisible] = useState(0);
  const [rows, setRows] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/bahan-tambahan/riwayat-transaksi", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      let inside = [];
      let inside2 = [];
      let stok2 = [];
      result.data.data.map((item) => {
        const allItem = JSON.parse(item.itemDetail);
        let temp;
        allItem.map((item) => {
          for (let i = 0; i < 6; i++) {
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
                  value: item.unit,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 4:
                temp = {
                  value: item.sellPrice,
                  align: "center",
                };
                inside.push(temp);
                break;
              case 5:
                temp = {
                  value: item.sellPrice * item.qty,
                  align: "right",
                };
                inside.push(temp);
                break;
            }
          }
          stok.push({ data: inside });
        });
        let no2 = 0;
        for (let i = 0; i < 6; i++) {
          switch (i) {
            case 0:
              temp = {
                value: ++no2,
                align: "center",
              };
              inside2.push(temp);
              break;
            case 1:
              temp = {
                value: item.name,
                align: "left",
              };
              inside2.push(temp);
              break;
            case 2:
              temp = {
                value: item.status,
                align: "center",
              };
              inside2.push(temp);
              break;
            case 3:
              temp = {
                value: item.total,
                align: "center",
              };
              inside2.push(temp);
              break;
            case 4:
              temp = {
                value: detail(no, stok),
                align: "center",
              };
              inside2.push(temp);
              break;
          }
        }
        stok2.push({ data: inside2 });
      });
      setRows(stok2);
    };

    fetchData();
  }, []);

  const columns2 = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Nama Produk",
    },
    {
      align: "center",
      name: "Stok",
    },
    {
      align: "center",
      name: "Satuan Kemasan",
    },
    {
      align: "center",
      name: "Harga Satuan",
    },
    {
      align: "right",
      name: "Total",
    },
  ];

  function DataModal(id, content) {
    return (
      <Modal
        title={[<div className="title-modalpembayaran">Detail Transaksi</div>]}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button className="btn_primary" onClick={() => setVisible(null)}>
              Kembali
            </Button>
          </div>
        }
        visible={visible === id}
        onCancel={() => setVisible(null)}
        centered
      >
        <div className="isiModal-notif">
          <Tabel
            columns={columns2}
            rows={content}
            togglePagination={false}
            toggleTotal={true}
          />
        </div>
      </Modal>
    );
  }

  function detail(id, data) {
    return (
      <div>
        <Button className="btn_primary" onClick={() => setVisible(id)}>
          Lihat Detail
        </Button>
        {DataModal(id, data)}
      </div>
    );
  }

  const columns = [
    {
      align: "center",
      name: "No",
    },
    {
      align: "left",
      name: "Transaksi",
    },
    {
      align: "center",
      name: "Tipe",
    },
    {
      align: "center",
      name: "Total",
    },
    {
      align: "center",
      name: "Aksi",
    },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={2} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Riwayat
            rows={rows}
            columns={columns}
            total="Rp. 8.000.000"
            masuk="1.000.000"
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
