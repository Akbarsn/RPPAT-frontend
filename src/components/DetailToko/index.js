import React, { useState, Fragment } from "react";
import "./DetailToko.scss";
import "../Table.scss";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Button, Avatar, Form, InputNumber, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Index = (props) => {
  const history = useHistory();
  let coba = useSelector((state) => state.formValue);
  const dispatch = useDispatch();

  const data = props.data;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [bankName, setbankName] = useState(props.bankName);
  const bankDetail = props.bankDetail;
  const [message, setMessage] = useState(null);

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

  async function finish(value) {
    setLoading(true);
    console.log(value);
    let boughtItems = [];
    let no = 0;
    data.map((data) => {
      if (
        value[data.id] != null ||
        value[data.id] != undefined ||
        value[data.id] > 0
      ) {
        data.inputdata = value[data.id];
        boughtItems.push(data);
      }
    });
    console.log("bought");
    console.log(boughtItems);
    if (boughtItems.length < 1) {
      setMessage("Silahkan pilih produk sebelum lanjut ke pembayaran");
    } else {
      dispatch({
        type: "ADD_DATA",
        payload: boughtItems,
        acc: props.bankName,
        detail: props.bankDetail,
      });
      history.push(props.link);
    }
    setLoading(false);
  }

  return (
    <div id="detailtoko">
      <Form onFinish={finish} initialValues={coba}>
        <div className="namatoko">
          <div style={{ display: "inline" }}>
            <Avatar
              size={75}
              icon={
                props.gambar == null ? (
                  <UserOutlined />
                ) : (
                    <img src={props.gambar} />
                  )
              }
            />
          </div>
          <div style={{ display: "inline", marginLeft: "2%" }}>
            Toko {props.nama}
          </div>
          {message == null ? (
            <Fragment />
          ) : (
              <Alert
                message={message}
                type="error"
                closable
                showIcon
                style={{ marginTop: "1%" }}
              />
            )}
        </div>

        <div className="tablestok">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Nama Produk</StyledTableCell>
                  <StyledTableCell align="center">
                    {props.store == "baku" ? (
                      <span>Grade</span>
                    ) : (
                        <span>Satuan</span>
                      )}
                  </StyledTableCell>
                  <StyledTableCell align="center">Stok</StyledTableCell>
                  <StyledTableCell align="center">Harga</StyledTableCell>
                  <StyledTableCell align="center">Beli</StyledTableCell>
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
                    <StyledTableCell align="left">
                      {row.item}{" "}
                      {props.store == "baku" ? (
                        <span>Grade {row.grade}</span>
                      ) : (
                          <span></span>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {props.store == "umkm" ? (
                        <span>{row.weight}</span>
                      ) : (
                          <span>{row.unit}</span>
                        )}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.qty}</StyledTableCell>
                    <StyledTableCell align="center">
                      Rp.{" "} {row.sellPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Form.Item
                        name={row.id}
                        rules={[
                          {
                            type: "number",
                            min: 1,
                            max: row.qty,
                            message: "Masukan tidak boleh melebihi kuantitas",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{ display: "inline-block", width: 100 }}
                          placeholder="ex: 100"
                          min={1}
                          max={row.qty}
                          type="number"
                        />
                      </Form.Item>
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
        <div className="buttongroupbeli">
          <Button
            className="btn_secondary"
            onClick={() => history.push(props.linkback)}
          >
            Kembali
          </Button>
          <Button className="btn_primary" htmlType="submit" loading={loading}>
            Selanjutnya
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Index;
