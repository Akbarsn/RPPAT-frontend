import React, { useState, Fragment } from "react";
import "./Riwayat.scss";
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
import { Row, Col, Button, Modal, Empty } from "antd";
import Tabel from "../Table";

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visible, setVisible] = useState(null);
  const data = props.data;

  console.log(data);

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
  return (
    <div id="riwayattransaksi">
      <p className="titlepage" style={{ margin: "1% 2% 2% 2%" }}>
        Riwayat Transaksi
      </p>
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
                <StyledTableCell align="center">Total</StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {data.length < 1 ? <TableRow><TableCell colSpan={5}><Empty description={<span>Tidak Ada Riwayat Transaksi</span>}/></TableCell></TableRow> :
              (rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, index) => (
                <TableRow key={row}>
                  <StyledTableCell align="center">{row.no}</StyledTableCell>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">
                    Rp. {row.total.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
                    <Modal
                      title={[
                        <div className="title-modalpembayaran">
                          Detail Transaksi
                        </div>,
                      ]}
                      footer={
                        <div style={{ textAlign: "right" }}>
                          <Button
                            className="btn_primary"
                            onClick={() => setVisible(null)}
                          >
                            Kembali
                          </Button>
                        </div>
                      }
                      visible={visible === index}
                      onCancel={() => setVisible(null)}
                      centered
                      width = {1100}
                    >
                      <div className="isiModal-notif">
                        <Tabel
                          columns={props.columns2}
                          rows={row.data}
                          togglePagination={false}
                          toggleTotal={true}
                        />
                      </div>
                    </Modal>
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
