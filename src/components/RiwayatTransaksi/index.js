import React, { useState, Fragment } from "react";
import "./Riwayat.scss";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Row, Col, Button, Modal } from "antd";

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visible, setVisible] = useState(false);

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#1DC6C6",
      color: theme.palette.common.white,
      fontSize: 18
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function showModal () {
    setVisible(true);
  };

  function handleOk (e) {
    setVisible(false);
  };

  return (
    <div className="riwayattransaksi">
      <p className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
        Riwayat Transaksi
      </p>
      <div className="detailtransaksi" style={{margin:"4% 1%"}}>
        <Row>
          <Col span={11} style={{ margin: "1%" }}>
            <div className="cardsecondary">
              <p className="thirdtitle">Pemasukan :</p>
              <p className="datauang">Rp. {props.masuk}</p>
            </div>
          </Col>
          {props.pengeluaran? <Col span={11} style={{ margin: "1% 3% 1% 1%" }}>
            <div className="cardsecondary">
              <p className="thirdtitle">Pengeluaran :</p>
              <p className="datauang">Rp. {props.keluar}</p>
            </div>
          </Col> : <Fragment/>}
          
        </Row>
      </div>
      <p className="sectitle" style={{ margin: "1% 2%" }}>
        Detail Transaksi
      </p>
      <div className="tablestok">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No</StyledTableCell>
                <StyledTableCell align="left">Transaksi</StyledTableCell>
                <StyledTableCell align="center">Tipe</StyledTableCell>
                <StyledTableCell align="center">Total Harga</StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? props.rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : props.rows
              ).map(row => (
                <TableRow key={row}>
                  <StyledTableCell align="center">{row.no}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.transaksi}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.tipe}</StyledTableCell>
                  <StyledTableCell align="center">{row.harga}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={showModal} className="btn_primary"> Lihat Detail </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Rp. 1.000.000
                </TableCell>
              </TableRow>
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
      <Modal
        title="Detail Transaksi"
        visible={visible}
        footer={[<Button className="btn_primary" onClick={handleOk}>OK</Button>]}
        onCancel={handleOk}
      >
        <p>Hai</p>
      </Modal>
    </div>
  );
}
