import React, { useState } from "react";
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
import { Button, Avatar, Form, InputNumber } from "antd";
import { UserOutlined } from '@ant-design/icons';

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#1DC6C6",
      color: theme.palette.common.white,
      fontSize: 20,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function finish(value){
      console.log(value);
  }

  const data = props.data;


  return (
    <div id="detailtoko">
    <Form onFinish = {finish}>
      <div className="titlepage">
        <p>Detail {props.nama}</p>
      </div>
      <div className="namatoko">
        <div style={{display:"inline"}}><Avatar size={75} icon={<UserOutlined />} /></div>
        <div style={{display:"inline", marginLeft:"2%"}}>Toko Budi</div>
      </div>
      <div className="tablestok">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nama Bahan Tambah</StyledTableCell>
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
              ).map((row) => (
                <TableRow key={row}>
                  <StyledTableCell align="left">{row.nama}</StyledTableCell>
                  <StyledTableCell align="center">{row.stok}</StyledTableCell>
                  <StyledTableCell align="center">{row.harga}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Form.Item name={row.label}>
                      <InputNumber
                        style={{ display: "inline-block", width: 100 }}
                        placeholder="ex: 100"
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
        <Button className="btn_secondary">Kembali</Button>
        <Form.Item>
        <Button className="btn_primary" htmlType="submit">Selanjutnya</Button>
        </Form.Item>
      </div>
      </Form>
    </div>
  );
}
