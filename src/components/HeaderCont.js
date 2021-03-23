import React from "react";
import "../styles/Stadistics.css";

const HeaderCont = ({title}) => {
  return (
    <>
      <div className="cont-header">
        <h3>{title}</h3>
        <div className="dates">
          <select className="short-date">
            <option value="pen">Pen</option>
          </select>
          <select className="date">
            <option value="MARZO-2021">MARZO-2021</option>
          </select>
        </div>
      </div>
      <div className="tag-blue">
        <span className="lbl-tag">S/64951.00</span>
      </div>
    </>
  );
};

export default HeaderCont;
