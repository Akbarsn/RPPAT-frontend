import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Modal, Button } from "antd";
import Riwayat from '../../components/RiwayatTransaksi';
import Tabel from '../../components/Table';
import API from '../API';

export default function RiwayatTransaksi() {

  const [visible, setVisible] = useState(0);
  const [rows, setRows] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6MywiaWF0IjoxNTg3MDkzMzk4fQ.7ebbcyp6H9SxRaDjgiUdBKZk6m80lqkn37R6o0OU47M";
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/kemasan/riwayat-transaksi", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      let inside = [];
      result.data.data.itemDetail.map((item) => {
        let temp;
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
                value: item.grade,
                align: "center",
              };
              inside.push(temp);
              break;
            case 3:
              temp = {
                value: item.qty,
                align: "center",
              };
              inside.push(temp);
              break;
            case 4:
              temp = {
                value: item.unit,
                align: "center",
              };
              inside.push(temp);
              break;
              case 5:
              temp = {
                value: item.price,
                align: "right",
              };
              inside.push(temp);
              break;
          }
        }
        });
      stok.push({data:inside});
      let inside2 = [];
      let stok2 = [];
      let no2 = 0;
      result.data.data.map((item) => {
        let temp;
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
        });
        stok2.push({data:inside2});
      setRows(stok2);
    };

    fetchData();
  }, []);


  function DataModal(id, content) {
      return (
      <Modal
        title={[<div className="title-modalpembayaran">Detail Transaksi</div>]}
        footer={ 
        <div style={{ textAlign: "right" }}>
          <Button className="btn_primary" onClick={()=>setVisible(null)}>
            Kembali
          </Button>
        </div>
      }
        visible={visible === id}
        onCancel={()=>setVisible(null)}
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
      )
    }

  function detail (id, data) { 
    return (
    <div>
      <Button className="btn_primary" onClick={() => setVisible(id)}>Lihat Detail</Button>
      {DataModal(id, data)}
    </div>
  )
  }

  const columns2 = [
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


  const columns = [
    {
      align: "center",
      name: "No"
    },
    {
      align: "left",
      name: "Transaksi"
    },
    {
      align: "center",
      name: "Tipe"
    },
    {
      align: "center",
      name: "Total"
    },
    {
      align: "center",
      name: "Aksi"
    }
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={1} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Riwayat rows={rows} columns = {columns} total = "Rp. 8.000.000" masuk="1.000.000"/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
