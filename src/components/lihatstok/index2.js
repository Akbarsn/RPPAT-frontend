import React, { useState, useEffect, Fragment } from "react";
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
  const data = props.data;
  const [loading, setLoading] = useState(false);
  const [dataform, setDataform] = useState();
  const [id, setId] = useState(null);

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
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

  // const normFile = (e) => {
  //   console.log("Upload event:", e);
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   message.success("Upload Berhasil");
  //   return e && e.fileList;
  // };

  const [form] = Form.useForm();

  async function onFinish(value) {
    setLoading(true);

    Object.assign(value, {id : id})

    console.log(value);

    try {
      const result = await API.post(props.linkpost, value, {
        headers: {
          Authorization: `bearer ${props.token}`,
          "content-type": "application/json",
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

  useEffect(() => {
    const fetchData = async () => {
      let columns = props.columns;
      let row = props.rows;
      let values = {};
      try {
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].label !== "no") {
            values[columns[i].label] = row[visible].data[i].value;
          }
        }
        let initial = values;
        setDataform(initial);
      } catch {
        console.log("yo");
      }
    };
    fetchData();
  }, [visible]);

  return (
    <div id="lihatstok">
      <p className="sectitle" style={{ margin: "1% 2% 1% 2%" }}>{props.title}</p>
      <div className="tablestok">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {props.columns.map((column) => {
                  return (
                    <StyledTableCell align={column.align}>
                      {column.name}
                    </StyledTableCell>
                  );
                })}
                {props.aksi ? (
                  <StyledTableCell align="center">Aksi</StyledTableCell>
                ) : (
                  <Fragment />
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? props.rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, indexx) => {
                return (
                  <TableRow key={row}>
                    {row.data.map((data, index) => {
                      if (
                        typeof data.value == "number" &&
                        index != 0 &&
                        props.columns[index].name.includes("Harga")
                      ) {
                        return (
                          <StyledTableCell align={data.align}>
                            Rp.{" "}
                            {data.value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          </StyledTableCell>
                        );
                      } else if (data.value === "button") {
                        return (
                          <StyledTableCell align="center">
                            <div>
                              <Button
                                className="btn_primary"
                                onClick={() => {
                                  setId(data.id);
                                  setVisible(indexx);
                                }}
                              >
                                Edit Data
                              </Button>
                            </div>
                            <Modal
                              title={[
                                <div className="title-modalpembayaran">
                                  Edit Data
                                </div>,
                              ]}
                              footer={false}
                              visible={visible === indexx}
                              onCancel={() => setVisible(null)}
                              centered
                            >
                              <Form
                                {...layout}
                                form={form}
                                initialValues={form.setFieldsValue(dataform)}
                                onFinish={onFinish}
                              >
                                {props.columns.map((data) => {
                                  if (data.label === "buyPrice" && props.role !== 0) {
                                    return (
                                      <Form.Item
                                        label={data.name}
                                        name={data.label}
                                      >
                                        <Input disabled />
                                      </Form.Item>
                                    );
                                  } else if (data.label !== "no") {
                                    return (
                                      <Form.Item
                                        label={data.name}
                                        name={data.label}
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Tolong lengkapi data !",
                                          },
                                        ]}
                                      >
                                        <Input />
                                      </Form.Item>
                                    );
                                  }
                                })}
                                {/* <Form.Item
                                  name="image"
                                  // rules={[
                                  //   {
                                  //     required: true,
                                  //     message: "Tolong unggah gambar produk !",
                                  //   },
                                  // ]}
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
                                </Form.Item> */}
                                <Form.Item>
                                  <div style={{ textAlign: "right" }}>
                                    <Button
                                      className="btn_primary"
                                      htmlType="submit"
                                    >
                                      Simpan
                                    </Button>
                                  </div>
                                </Form.Item>
                              </Form>
                            </Modal>
                          </StyledTableCell>
                        );
                      } else {
                        return (
                          <StyledTableCell align={data.align}>
                            {data.value}
                          </StyledTableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
