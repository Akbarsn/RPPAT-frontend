import React, { useState, useEffect } from "react";
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
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Index = (props) => {
  const history = useHistory();
  let coba = useSelector((state) => state.data);
  const dispatch = useDispatch();

  let datas = props.data;

  useEffect(() => {
    console.log(props);
    const fetchData = () => {
      let newData = datas;
      let newValue = [];
      if (coba === undefined) {
        newData.map((qty, index) => {
          newValue.push(qty.inputdata);
        });
      } else {
        for (let i = 0; i < newData.length; i++) {
          for (let k = 0; k < coba.length; k++) {
            if (newData[i].item === coba[k].item) {
              newData[i].inputdata = coba[k].inputdata;
              break;
            }
          }
          newValue.push(newData[i].inputdata);
        }
        // datas = newData;
        // console.log(newData);
        // setData(newData);
      }
    };
    fetchData();
  }, []);

  const data = props.data;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [boughtItems, setBoughtItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bankName, setbankName] = useState(props.bankName);
  const bankDetail = props.bankDetail;

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
    setBoughtItems(null);
    setLoading(true);
    let no = 0;
    for (let i = 0; i < data.length; i++) {
      console.log("data");
      console.log(data);
      if (value[i] != null || value[i] != undefined) {
        data[i].inputdata = value[i];
        boughtItems.push(data[i]);
      }
    }
    console.log("bought");
    console.log(boughtItems);
    dispatch({type:"ADD_BANK_ACC", payload:props.bankName})
    dispatch({type:"ADD_BANK_DETAIL", payload:props.bankDetail})
    dispatch({ type: "ADD_DATA", payload: boughtItems });
    console.log(props.bankName)
    history.push(props.link);
    setLoading(false);
  }

  return (
    <div id="detailtoko">
      {/* {console.log(props)}
      {console.log(data)} */}
      <Form onFinish={finish} initialValues={props.initial}>
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
        </div>

        <div className="tablestok">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Nama Produk</StyledTableCell>
                  <StyledTableCell align="center">Grade</StyledTableCell>
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
                    <StyledTableCell align="left">{row.item}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.grade}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.qty}</StyledTableCell>
                    <StyledTableCell align="center">
                      Rp. {props.store === "baku" ? row.price : row.sellPrice}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Form.Item name={index}>
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
          <Button className="btn_primary" htmlType="submit" loading={loading}>
            Selanjutnya
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Index;
