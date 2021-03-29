import React from 'react';
import '../styles/checkbox.css';

const CheckBox = ({checked, onChange, label}) =>{
  return(
    <div className="checkbox">
      <div className="border" onClick={()=>onChange(!checked)}>
        <div className={`indicator ${checked ? "checked" : ""}`} />
      </div>
      <div className="label">{label}</div>
    </div>
  )
};

export default CheckBox;