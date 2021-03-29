import React from "react";
import '../styles/dataStock.css';
import JSONDATA from "../MOCK_DATA.json";

const DataStock = ({data,setItem}) => {  
  return (
    <div className="cont-cards">      
      {JSONDATA.filter((val)=>{
        if(data===""){
          return val;
        } else if(val.title.toLowerCase().includes(data.toLowerCase())){
          return val;
        }
      }).map((item, key) => { 
        return (
          <div key={key} className="card" onClick={()=> setItem([item.title,item.price,item.image,item.id])}> 
            <img src={item.image} className="img-card" alt="product"/>
            <div className="cont-title">
              <label>{item.title}</label>
              <label className="lbl-description">{item.description}</label>
            </div>
            <div className="cont-price">
              <label className="lbl-price">{item.price}</label>
              <button className="btn-stock" >Ver stock</button>
            </div>
          </div>
        );
      })}      
    </div>
  );
};

export default DataStock;
