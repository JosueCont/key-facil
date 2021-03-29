import React from "react";
import '../styles/invoice.css';
import logo from "../assets/logo192.png";

const Scaner = () => {
  return (
    <div style={{display:'flex',flex:1,justifyContent:'space-evenly', flexDirection:'column',alignItems:'center'}}>
      <img src={logo} alt="Icono estadisticas" className="img-lector" />
      <label className="lbl-lector">
        Escanea un producto con un codigo de barras o buscalo manualmente
      </label>
    </div>
  );
};

export default Scaner;
