import React from "react";
import "../styles/Stadistics.css";
import VoucherIssued from "./VoucherIssued";
import DoughnutChart from "./DoughnutChart";
import LineChart from './LineChart';
import HeaderCont from './HeaderCont';

export default class Stadistics extends React.Component {
  render() {
    return (
      <>
        <h3>Estadisticas</h3>
        <div className="cont-emisiones">
          <div className="cont-header">
            <h3>Emisiones</h3>
            <select className="date">
              <option value="MARZO-2021">MARZO-2021</option>
            </select>
          </div>
          <div className="cont-body">
            <VoucherIssued />
            <DoughnutChart />
          </div>
        </div>
        <div className="cont-emisiones">
          <HeaderCont title="Ventas"/> 
          <div className="cont-chart">
            <LineChart />
          </div>         
        </div>
        <div className="cont-emisiones">
          <HeaderCont title="Compras"/>
          <div className="cont-chart">
            <LineChart />
          </div> 
        </div>
      </>
    );
  }
}
