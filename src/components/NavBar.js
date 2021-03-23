import React from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo192.png";

const NavBar = () => {
  return (
    <>
      <header className="headerCont">
        <img src={logo} alt="Logo" className="imgHeader" />
        <h3>...</h3>
      </header>
      <div className="cont-imageUser">
        <img src={logo} alt="Logo" className="imgUser" />
      </div>
      <div className="select-wrap">
        <label className="lbl-select">Empresa</label>
        <select className="name-company" name="Empresa" >
          <option value="uno">Uno</option>
        </select>
      </div>
      <div className="select-wrap">
        <label className="lbl-select">Sucursal</label>
        <select className="name-company" name="Empresa" >
          <option value="uno" >Uno</option>
        </select>
        </div>
    </>
  );
};

export default NavBar;
