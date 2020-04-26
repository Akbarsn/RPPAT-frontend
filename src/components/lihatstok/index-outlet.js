import React, { useState } from "react";
import "./LihatStok.scss";
import { Modal, Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import API from "../../pages/API";

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visible, setVisible] = useState(null);
  const [id, setId] = useState(null);
  const data = props.data;
  const [loading, setLoading] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#1DC6C6",
      color: theme.palette.common.white,
      fontSize: 22,
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    message.success("Upload Berhasil");
    return e && e.fileList;
  };

  async function onFinish(value) {
    setLoading(true);
    // let id;
    // data.map((item) => {
    //   if (item.item === value.item) {
    //     id = item.id;
    //   }
    // });
    console.log(value)

    const form = new FormData();
    form.append("id", id);
    form.append("item", value.item);
    form.append("image", value.image[0].originFileObj);
    form.append("qty", value.qty);
    form.append("sellPrice", value.sellPrice);

    // let postvalue = {
    //   id: id,
    //   item: value.item,
    //   image: value.itemImage,
    //   qty: value.qty,
    //   sellPrice: value.sellPrice,
    // };

    console.log(...form);

    try {
      const result = await API.post(props.linkpost, form, {
        headers: {
          Authorization: `bearer ${props.token}`,
          "content-type": "multipart/form-data",
        },
      });
      console.log(result);
      if (result.status === 200) {
        message.success("Perubahan data berhasil disimpan");
        window.location.reload();
      } else {
        message.error("Terjadi kegagalan dalam menyimpan data");
      }
    } catch (e) {
      console.log(e.message);
      message.error("Terjadi kegagalan dalam menyimpan data");
    }
    setLoading(false);
    setVisible(null);
  }

  return (
    <div id="lihatstok">
      <p className="titlepage" style={{ margin: "1% 2% 1% 2%" }}>
        Lihat Stok
      </p>
      <p className="sectitle">{props.title}</p>
      <div className="tablestok">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No</StyledTableCell>
                <StyledTableCell align="left">Nama Produk</StyledTableCell>
                <StyledTableCell align="center">Jumlah</StyledTableCell>
                <StyledTableCell align="center">Satuan Kemasan</StyledTableCell>
                <StyledTableCell align="center">
                  Harga Beli per Kemasan
                </StyledTableCell>
                <StyledTableCell align="center">
                  Harga Jual per Kemasan
                </StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, index) => {
                // value[index] = {
                //   item: row.item,
                //   weight: row.weight,
                //   itemImage: row.itemImage,
                //   qty: row.qty,
                //   sellPrice: row.sellPrice,
                // };
                return (
                  <TableRow key={row}>
                    <StyledTableCell align="center">{row.no}</StyledTableCell>
                    <StyledTableCell align="left">{row.item}</StyledTableCell>
                    <StyledTableCell align="center">{row.qty}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.weight}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.buyPrice}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.sellPrice}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div>
                        <Button
                          className="btn_primary"
                          onClick={() => {
                            setId(row.id);
                            setVisible(index);
                          }}
                        >
                          Lihat Detail
                        </Button>
                      </div>
                      <Modal
                        title={[
                          <div className="title-modalpembayaran">
                            Edit Stok{row.no}
                          </div>,
                        ]}
                        footer={false}
                        visible={visible === index}
                        onCancel={() => setVisible(null)}
                        centered
                      >
                        <Form
                          {...layout}
                          initialValues={data[index]}
                          onFinish={onFinish}
                        >
                          <Form.Item label="Nama Produk" name="item">
                            <Input disabled />
                          </Form.Item>

                          <Form.Item label="Satuan Kemasan" name="weight">
                            <Input disabled />
                          </Form.Item>

                          <Form.Item
                            name="image"
                            rules={[
                              {
                                required: true,
                                message: "Tolong berikan gambar produk !",
                              },
                            ]}
                            label={<div>Upload Gambar Produk</div>}
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="Pastikan file dalam format .png atau .jpeg"
                          >
                            <Upload
                              name="logo"
                              listType="picture"
                              accept=".png,.jpeg"
                            >
                              <Button>
                                <UploadOutlined />
                                Klik untuk Upload
                              </Button>
                            </Upload>
                          </Form.Item>
                          <Form.Item
                            label="Stok"
                            name="qty"
                            rules={[
                              {
                                required: true,
                                message: "Tolong masukkan stok produk !",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Harga Jual per Kemasan"
                            name="sellPrice"
                            rules={[
                              {
                                required: true,
                                message: "Tolong masukkan harga jual !",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          <Form.Item>
                            <div style={{ textAlign: "right" }}>
                              <Button
                                className="btn_primary"
                                htmlType="submit"
                                loading={loading}
                              >
                                Simpan
                              </Button>
                            </div>
                          </Form.Item>
                        </Form>
                      </Modal>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
