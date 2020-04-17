import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import "./Table.scss";

export default function Tabel(props) {
  let indexTotal = 0;

  const hitungTotal = (rows, columns) => {
    let temp = 0;
    let i = 0;
    let isThereTotal = false;
    columns.map((column) => {
      if (column.name === "Total") {
        indexTotal = i;
        isThereTotal = true;
      }
      i++;
    });

    if (isThereTotal) {
      rows.map((row) => {
        temp += row.data[indexTotal].value;
      });
      isThereTotal = false;

      return temp;
    }

    return props.total;
  };

  let temp = null;
  if (props.pagination) {
    temp = props.pagination[0];
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(temp);
  const [total, setTotal] = useState(hitungTotal(props.rows, props.columns));

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

  return (
    <div>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? props.rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : props.rows
            ).map((row) => (
              <TableRow key={row}>
                {row.data.map((data, index) => {
                  if (
                    typeof data.value == "number" &&
                    index != 0 &&
                    (index != 2 && index != 3)
                  ) {
                    return (
                      <StyledTableCell align={data.align}>
                        Rp.{" "}
                        {data.value
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
            ))}

            {props.toggleTotal ? (
              <TableRow>
                <StyledTableCell
                  colSpan={
                    props.columns[props.columns.length - 1].name != "Total"
                      ? props.columns.length - 3
                      : props.columns.length - 2
                  }
                ></StyledTableCell>
                <StyledTableCell align="center">
                  <p className="totaltable">Total</p>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <p className="totaltable">
                    Rp. {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </StyledTableCell>
              </TableRow>
            ) : (
              <Fragment />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {props.togglePagination ? (
        <TablePagination
          rowsPerPageOptions={props.pagination}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
