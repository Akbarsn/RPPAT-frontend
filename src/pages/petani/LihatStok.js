import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Layout, Modal, Button, Row, Form, Input, Col, Select } from "antd";
import Lihat from "../../components/lihatstok/index";
import API from "../API";

export default function LihatStok() {
  const [rows, setRows] = useState([]);
  const [visible, setVisible] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await API.get("/petani/lihat-stok", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      console.log(result);

      let stok = [];
      let no = 0;
      result.data.data.map((item) => {
        ++no;
        let temp;
        let inside = [];
        for (let i = 0; i < 7; i++) {
          switch (i) {
            case 0:
              temp = {
                value: no,
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
                align: "center",
              };
              inside.push(temp);
              break;
            // case 6:
            //   temp = {
            //     value: detail(no, item),
            //     align: "center",
            //   };
            //   inside.push(temp);
            //   break;
          }
        }
        stok.push({ data: inside });
      });
      setRows(stok);
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
      name: "Jenis Apel",
    },
    {
      align: "center",
      name: "Grade",
    },
    {
      align: "center",
      name: "Jumlah",
    },
    {
      align: "center",
      name: "Satuan",
    },
    {
      align: "center",
      name: "Harga per Satuan",
    },
    // {
    //   align: "center",
    //   name: "Edit Stok",
    // },
  ];

  // const handleSubmit = (value) => {};

  // function DataModal(id, content) {
  //   return (
  //     <Modal
  //       title={[<div className="title-modalpembayaran">Rubah Stok</div>]}
  //       footer={false}
  //       visible={visible === id}
  //       onCancel={() => setVisible(null)}
  //       centered
  //     >
  //       <div className="isiModal-notif">
  //         <Form
  //           layout="vertical"
  //           onFinish={handleSubmit}
  //           initialValues={content}
  //         >
  //           <Form.Item
  //             label="Jenis apel"
  //             name="item"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Isi jenis apel",
  //               },
  //             ]}
  //           >
  //             <Input />
  //           </Form.Item>

  //           <Row justify="space-around" gutter={[24, 24]}>
  //             <Col span={12}>
  //               <Form.Item
  //                 key="grade"
  //                 label="Grade"
  //                 name="grade"
  //                 rules={[
  //                   {
  //                     required: true,
  //                     message: "Pilih grade apel anda",
  //                   },
  //                 ]}
  //               >
  //                 <Select>
  //                   <Select.Option key="A" value="A">
  //                     A
  //                   </Select.Option>
  //                   <Select.Option key="B" value="B">
  //                     B
  //                   </Select.Option>
  //                   <Select.Option key="C" value="C">
  //                     C
  //                   </Select.Option>
  //                   <Select.Option key="D" value="D">
  //                     D
  //                   </Select.Option>
  //                   <Select.Option key="E" value="E">
  //                     E
  //                   </Select.Option>
  //                 </Select>
  //               </Form.Item>
  //             </Col>
  //             <Col span={12}>
  //               <Form.Item
  //                 label="Jumlah Stok"
  //                 name="qty"
  //                 rules={[
  //                   {
  //                     required: true,
  //                     message: "Isi jumlah stok anda",
  //                   },
  //                 ]}
  //               >
  //                 <Input />
  //               </Form.Item>
  //             </Col>
  //             <Col span={12}>
  //               <Form.Item
  //                 label="Harga per Satuan"
  //                 name="price"
  //                 rules={[
  //                   {
  //                     required: true,
  //                     message: "Isi Harga per satuan anda",
  //                   },
  //                 ]}
  //               >
  //                 <Input type="number" />
  //               </Form.Item>
  //             </Col>
  //             <Col span={12}>
  //               <Form.Item
  //                 label="Satuan"
  //                 name="unit"
  //                 rules={[
  //                   {
  //                     required: true,
  //                     message: "Isi satuan stok anda",
  //                   },
  //                 ]}
  //               >
  //                 <Input />
  //               </Form.Item>
  //             </Col>
  //           </Row>
  //         </Form>

  //         <Row justify="space-around">
  //           <Button
  //             type="secondary"
  //             size="large"
  //             onClick={() => setVisible(null)}
  //             className="btn_secondary"
  //           >
  //             Batal
  //           </Button>

  //           <Button
  //             type="primary"
  //             size="large"
  //             htmlType="submit"
  //             className="btn_primary"
  //           >
  //             Submit
  //           </Button>
  //         </Row>
  //       </div>
  //     </Modal>
  //   );
  // }

  // function detail(id, data) {
  //   return (
  //     <div>
  //       <Button
  //         className="btn_primary"
  //         onClick={(id)=>setVisible(id)}
  //       >
  //         Lihat Detail
  //       </Button>

  //       {DataModal(id, data)}
  //     </div>
  //   );
  // }

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
          <Lihat title="Stok Apel" rows={rows} columns={columns} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
