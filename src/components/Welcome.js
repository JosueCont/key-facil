import React from 'react';
import logo from "../assets/logo192.png";
import "../styles/welcome.css";

const Welcome = ()=>{
  return(
    <div className="cont-logos">
      <img src={logo} alt="logo" className="logo"/>
      <img src={logo} alt="logo" className="logo"/>
    </div>
  )
}

export default Welcome;