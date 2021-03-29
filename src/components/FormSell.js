import React from 'react';

const FormSell = () =>{
  return(
    <form style={{ flex: 1 }}>
            <input
              type="text"
              name="cliente"
              placeholder="Cliente"
              className="inp-all inp-client"
            />

            <input
              type="date"
              name="cliente"
              placeholder="Cliente"
              className="inp-all inp-date"
            />

            <input
              type="date"
              name="cliente"
              placeholder="Cliente"
              className=""
              className="inp-all inp-date"
            />

            <input
              type="text"
              name="cliente"
              placeholder="BOLETA DE VENTA ELECTRONICA"
              className="inp-all inp-comprove"
            />

            <select className="inp-all inp-serie">
              <option>BB01</option>
            </select>
            <input
              type="text"
              name="cliente"
              placeholder="VENTA INTERNA"
              className="inp-all inp-sell"
            />
            <input
              type="text"
              name="cliente"
              placeholder="Dscto. global(%)"
              className="inp-all inp-sell"
            />
          </form>
  )
};

export default FormSell;