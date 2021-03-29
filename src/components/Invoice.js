import React from "react";
import "../styles/invoice.css";
import CheckBox from "./CheckBox";
import FormSell from "./FormSell";
import DataStock from "./DataStock";
import Scaner from "./Scaner";
import Stock from "./stock";

export default class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      searchTerm: "",
      openList: false,
      show: '',
      total: 1,
      list:[]
    };
  }
  onPressEnter = e => {
    if (e.key === "Enter") {
      console.log("pressEnter");
      this.setState({ openList: true });
    }
  };

  onPress = (item) => {
    this.setState({ show: item });
    this.state.list.push([{'id':item}]);
    this.setState({ openList: false });
  };
  deleteItemStock = item =>{
    console.log('pressDelete',item);   
    
  }
  showPrice=(val)=>{
    return(
    val.map(item=>{
      return item[0].id[1];
    })
    );
  }

  render() {
    console.log("list", this.state.list);
    return (
      <div className="cont-screen">
        <div className="header">
          <h3>Nueva venta</h3>
          <div className="cont-check">
            <CheckBox
              checked={this.state.checked}
              onChange={val => this.setState({ checked: val })}
              label="PROFORMA"
            />
          </div>
        </div>
        <div className="cont-form">
          <FormSell />
        </div>
        <div className="cont-btn">
          <button className="btn-options">PLACA</button>
          <button className="btn-options">O.COMPRA</button>
          <button className="btn-options">G. REMISIÓN</button>
          <button className="btn-options">DOC. REL</button>
          <button className="btn-options">OBSERVACIONES</button>
          <button className="btn-options">OTROS (+)</button>
        </div>
        <div className="cont-lector">
          {this.state.show === '' ? (
            <Scaner />
          ) : (
            <Stock
              cards={this.state.list}
              total={this.state.total}
              minus={() => this.setState({ total: this.state.total - 1 })}
              plus={() => this.setState({ total: this.state.total + 1 })}
              limit={this.state.total <=0 ? true : false}
              deleteItem={(val)=>this.setState({list:val.filter(item=>{
                return item.id
              }),show: ''})}
              openModal={()=>console.log('abrirModal')}
            />
          )}
        </div>
        <footer className="footer">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              name="product"
              placeholder="Buscar Producto..."
              className="input-search"
              autoComplete="false"
              autoCapitalize="false"
              onKeyDown={this.onPressEnter}
              onChange={event =>
                this.setState({ searchTerm: event.target.value })
              }
            />
            <button
              className="btn-cancel"
              onClick={() => {
                this.setState({ openList: false });
              }}
            >
              X
            </button>
          </div>
          <div className="cont-total">
            <div className="total">
              <span>TOTAL</span>
              <span>{this.state.list==="" ? "$0.0" : this.showPrice(this.state.list)}</span>
            </div>
            <button
              disabled={this.state.show  === "" ? true : false}
              className={
                this.state.show === "" ? "btn-total disabled" : "btn-total vp"
              }
              onClick={() => {
                this.setState({ openList: false });
              }}
            >
              VISTA PREVIA
            </button>
            <button
              disabled={this.state.show === "" ? true : false}
              className={
                this.state.show === "" ? "btn-total bdisabled" : "btn-total"
              }
            >
              PROCESAR
            </button>
          </div>
          <div></div>
          {this.state.openList === true ? (
            <DataStock
              data={this.state.searchTerm}
              setItem={val => this.onPress(val)}
            />
          ) : null}
        </footer>
      </div>
    );
  }
}
