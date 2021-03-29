import React from "react";
import "../styles/cardstok.css";

const List = ({cards,total,minus,plus,deleteItem,limit,openModal}) => {
  return (
    <>
    {cards.map((val,key)=>{
      return (
        <div className="cont-cardstock" key={key} onClick={openModal}>
          <img src={val[0].id[2]} alt="Icono estadisticas" className="img-card"/>
          <div className="cont-description">
            <label>{val[0].id[0]}</label>
            <div className="cont-insidecards" >
              <div className="cont-labels">
                <label className="lbls">Description</label>
                <label>0.0</label>
              </div>
              <div className="cont-labels">
                <label className="lbls">Precio unit.</label>
                <label>0.0</label>
              </div>
              <div className="cont-labels">
                <label className="lbls">Descuento</label>
                <label>0.0</label>
              </div>
              <div className="cont-labels">
                <label className="lbls">Total</label>
                <label>{val[0].id[1]}</label>
              </div>
            </div>            
          </div>
        <div className="cont-add">
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <button className={limit===true ? "btns btn-disabled" :"btns"} onClick={minus} disabled={limit}>-</button>
            <label className="lbl-btns">{total}</label>
            <button className="btns" onClick={plus}>+</button>
          </div>
          <button className="btn-delete"onClick={()=>deleteItem([val[0].id])}>Eliminar</button>
        </div>
        
      </div>
      );
    })}
    </>);
};
export default List;
