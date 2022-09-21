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
import { Footer } from "../footer/Footer";

export const Landingpage = ({ props }) => {
  const [currencyData, setCurrencyData] = useState([]);

  const [noOfElements, setNoOfElements] = useState(40);

  const splice = props.newdata.slice(0, noOfElements);

  const loadmore = () => {
    setNoOfElements(noOfElements + noOfElements);
  };

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
                {splice?.map((ele, i) => {
                  var price = Number(ele.priceUsd);
                  price = price.toFixed(2);

                  var marketcap = Number(ele.marketCapUsd) % 54;
                  marketcap = marketcap.toFixed(2);

                  var vwap = Number(ele.vwap24Hr);
                  vwap = vwap.toFixed(2);

                  var supply = Number(ele.supply) % 10;
                  supply = supply.toFixed(2);

                  var volume = Number(ele.volumeUsd24Hr) % 50;
                  volume = volume.toFixed(2);

                  var change = Number(ele.changePercent24Hr);
                  change = change.toFixed(2);

                  var flag;
                  if (change >= 0) {
                    flag = true;
                  } else {
                    flag = false;
                  }

                  var changealpha = ele.symbol.toLowerCase();
                  return (
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
                        <div className="name-div">
                          <div className="img-size">
                            <img
                              src={`https://assets.coincap.io/assets/icons/${changealpha}%402x.png`}
                            />
                          </div>
                          <div>
                            <div>{ele.name}</div>

                            <div>{ele.symbol}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">${price}</TableCell>
                      <TableCell align="right">{`$${marketcap}b`}</TableCell>
                      <TableCell align="right">{`$${vwap}`}</TableCell>
                      <TableCell align="right">{`$${supply}m`}</TableCell>
                      <TableCell align="right">{`$${volume}b`}</TableCell>
                      <TableCell align="right">
                        <div className={change > 0 ? "plus" : "minus"}>
                          {change}%
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <button className="loadbutton" onClick={() => loadmore()}>
          <h3>View More</h3>{" "}
        </button>
      </div>
      {/* <div className="partB">
        <Footer/>
      </div> */}
    </div>
  );
};
