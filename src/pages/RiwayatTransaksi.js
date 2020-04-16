import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Layout, Modal, Button } from "antd";
import Riwayat from '../components/RiwayatTransaksi/index';
import Tabel from '../components/Table';

export default function RiwayatTransaksi() {
  const [visible, setVisible] = useState(0);

  function close(){
    setVisible(null)
  }

  function DataModal(id, content) {
      return (
      <Modal
        title={[<div className="title-modalpembayaran">Detail Transaksi</div>]}
        footer={ 
        <div style={{ textAlign: "right" }}>
          <Button className="btn_primary" onClick={close}>
            Kembali
          </Button>
        </div>
      }
        visible={visible === id}
        onCancel={close}
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


  const rows = [
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left"
        },
        {
          value: "Pengeluaran",
          align: "center"
        },
        {
          value: 2000000,
          align: "center"
        },
        {
          value: detail(1, [
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
          ]),
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left"
        },
        {
          value: "Pengeluaran",
          align: "center"
        },
        {
          value: 2000000,
          align: "center"
        },
        {
          value: detail(2, [
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
          ]),
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left"
        },
        {
          value: "Pengeluaran",
          align: "center"
        },
        {
          value: 2000000,
          align: "center"
        },
        {
          value: detail(3, [
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
          ]),
          align: "center"
        }
      ]
    },
    {
      data: [
        {
          value: 1,
          align: "center"
        },
        {
          value: "Pembelian Apel Manalagi",
          align: "left"
        },
        {
          value: "Pengeluaran",
          align: "center"
        },
        {
          value: 2000000,
          align: "center"
        },
        {
          value: detail(4, [
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
          ]),
          align: "center"
        }
      ]
    }

  ]



  return (
    <Layout>
      <Layout.Header>
        <Navbar name={"Akbar"} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={280}>
          <Sidebar role={4} />
        </Layout.Sider>
        <Layout.Content style={{ backgroundColor: "white" }}>
          <Riwayat rows={rows} columns = {columns} total = "Rp. 8.000.000" masuk="1.000.000"/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
