import React, { useState, forwardRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Change from './Change';
import Details from "./components/Details";

function User(props) {
  // debugger;
  // const res  = props.data;
  // console.log("hsjknk", res);

  return (
    <>
    
      <TableContainer component={Paper}>
        <Table sx={{ minHeight: "auto", minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell align="left">ID</TableCell> */}
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">EmailId</TableCell>
              <TableCell align="left">password</TableCell>
              <TableCell align="left">confirmpassword</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">phone</TableCell>
            </TableRow>
          </TableHead>
          <TableCell align="left" component="th" scope="row">
            {props.data?.Name}
          </TableCell>
          <TableCell align="left">{props.data?.Gender}</TableCell>
          <TableCell align="left">{props.data?.EmailId}</TableCell>
          <TableCell align="left">{props.data?.password}</TableCell>
          <TableCell align="left">{props.data?.confirmpassword}</TableCell>
          <TableCell align="left">{props.data?.age}</TableCell>
          <TableCell align="left">{props.data?.Phone}</TableCell>
        </Table>
      </TableContainer>
    </>
  );
}
export default User;
