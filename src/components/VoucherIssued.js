import React from "react";
import "../styles/Stadistics.css";

const VoucherIssued = () => {
  return (
    <div className="cont-data">
      <span className="lbl-number">1,159</span>
      <span className="lbl-subtitle">Comprobantes emitidos</span>
      <div className="cont-fact">
        <div className="cont-item">
          <span>Factura</span>
          <span>207</span>
        </div>
        <div className="cont-item">
          <span>Boletos de venta</span>
          <span>221</span>
        </div>
        <div className="cont-item">
          <span>Notas de crédito</span>
          <span>0</span>
        </div>
        <div className="cont-item">
          <span>notas de debito</span>
          <span>0</span>
        </div>
        <div className="cont-item">
          <span>Proformas</span>
          <span>731</span>
        </div>
        <div className="cont-item">
          <span>Guias de remisión</span>
          <span>207</span>
        </div>
      </div>
    </div>
  );
};

export default VoucherIssued;
