import React, { useState } from "react";
import "./LihatStok.scss";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

export default function Index(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  return (
    <div className="lihatstok">
      <p className="titlepage" style={{ margin: "1% 2% 3.5% 2%" }}>
        Lihat Stok
      </p>
      <p className="sectitle" style={{ margin: "1% 2%" }}>
        {props.title}
      </p>
      <div className="tablestok">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No</StyledTableCell>
                <StyledTableCell align="left">Nama Barang</StyledTableCell>
                <StyledTableCell align="center">Jumlah</StyledTableCell>
                <StyledTableCell align="center">Satuan</StyledTableCell>
                <StyledTableCell align="center">Harga Jual</StyledTableCell>
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
                    {row.barang}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.jumlah}</StyledTableCell>
                  <StyledTableCell align="center">{row.satuan}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.harga}
                  </StyledTableCell>
                </TableRow>
              ))}
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

