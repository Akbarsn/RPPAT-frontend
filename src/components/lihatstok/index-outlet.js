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
import API from '../../pages/API';

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visible, setVisible] = useState(null);
  const data = props.data;
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

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

  async function onFinish(value){
      setLoading(true);
      let id;
      data.map((item)=> {
          if(item.item === value.item){
              id = item.id;
          }
      })
      let postvalue = {
          id : id,
          item : value.item,
          itemImage : value.itemImage,
          qty : value.qty,
          sellPrice : value.sellPrice
      }
      try {
        const result = await API.post(props.linkpost, postvalue, {
          headers: {
            Authorization: `bearer ${props.token}`,
            "content-type": "application/json",
          }
        })
        console.log(result);
        if(result.status === 200){
            message.success("Perubahan data berhasil disimpan");
            window.location.reload();
        }
        else {
          message.error("Terjadi kegagalan dalam menyimpan data");
        }
    }
    catch(e){
        console.log(e.message)
        message.error("Terjadi kegagalan dalam menyimpan data");
    }
    setVisible(null);
    setLoading(false);
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
              ).map((row, index) => (
                <TableRow key={row}>
                  <StyledTableCell align="center">{row.no}</StyledTableCell>
                  <StyledTableCell align="left">{row.item}</StyledTableCell>
                  <StyledTableCell align="center">{row.qty}</StyledTableCell>
                  <StyledTableCell align="center">{row.weight}</StyledTableCell>
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
                        onClick={() => setVisible(index)}
                      >
                        Lihat Detail
                      </Button>
                    </div>
                    <Form
                      {...layout}
                      form={form}
                      initialValues={form.setFieldsValue({
                        item: row.item,
                        itemImage: row.itemImage,
                        qty: row.qty,
                        sellPrice: row.sellPrice,
                      })}
                      onFinish={onFinish}
                    >
                      <Modal
                        title={[
                          <div className="title-modalpembayaran">
                            Edit Stok
                          </div>,
                        ]}
                        footer={
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
                        }
                        visible={visible === index}
                        onCancel={() => setVisible(null)}
                        centered
                      >
                        <Form.Item label="Nama Produk" name="item">
                          <Input disabled />
                        </Form.Item>
                        <Form.Item
                          name="itemImage"
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
                      </Modal>
                    </Form>
                  </StyledTableCell>
                </TableRow>
              ))}
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
