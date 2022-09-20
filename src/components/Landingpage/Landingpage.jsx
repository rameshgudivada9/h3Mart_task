import { useState } from "react";
import "./Landingpage.css";

// material ui
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Landingpage = ({ props }) => {
  const [currencyData, setCurrencyData] = useState([]);

  const changedecimal=(value)=>{
value.toFixed()
  }

  return (
    <div className="main">
      <div className="partA">
        <div className="sub-heading">
          <div>
            <h5>MARKET CAP</h5>
            <h4>$1.65T</h4>
          </div>
          <div>
            <h5>EXCHANGE VOLUME</h5>
            <h4>$130.29B</h4>
          </div>{" "}
          <div>
            <h5>ASSETS</h5>
            <h4>1,737</h4>
          </div>{" "}
          <div>
            <h5>EXCHANGE</h5>
            <h4>90</h4>
          </div>{" "}
          <div>
            <h5>MARKETs</h5>
            <h4>10,085</h4>
          </div>{" "}
          <div>
            <h5>BTC DOM INDEX</h5>
            <h4>45.0%</h4>
          </div>
        </div>
        <div className="table-div">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Market Cap</TableCell>
                  <TableCell align="right">VWAP(24Hr)</TableCell>
                  <TableCell align="right">Supply</TableCell>
                  <TableCell align="right">Volume(24Hr)</TableCell>
                  <TableCell align="right">Change(24Hr)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.newdata?.map((ele, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {ele.rank}
                    </TableCell>
                    <TableCell>
                      <div>{ele.name}</div>
                      <div>{ele.symbol}</div>
                    </TableCell>
                    <TableCell align="right">{`$${ele.priceUsd}`}</TableCell>
                    <TableCell align="right">{ele.marketCapUsd}</TableCell>
                    <TableCell align="right">{ele.vwap24Hr}</TableCell>
                    <TableCell align="right">{ele.supply}</TableCell>
                    <TableCell align="right">{ele.volumeUsd24Hr}</TableCell>
                    <TableCell align="right">{ele.changePercent24Hr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* <div className="partB"></div> */}
    </div>
  );
};
