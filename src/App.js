import React from "react";
import "./styles/app.css";
import NavBar from "./components/NavBar";
import logo from "./assets/logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stadistics from "./components/Stadistics";
import Invoice from './components/Invoice';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="container-app">
        <div className="container">
          <NavBar />
          <div className="container-estadistic">
            <Link to="/estadisticas" className="btn-stadistic">
              <img src={logo} alt="Icono estadisticas" />
              <span className="label-btn">Estadisticas</span>
            </Link>
          </div>
          <div className="cont-flow">
            <Link to="/invoice" className="btn-flow Rv">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Realizar venta</span>
            </Link>
            <Link className="btn-flow Vr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Ventas realizadas</span>
            </Link>
            <Link className="btn-flow Gr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Guia de remisión</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
            <Link className="btn-flow Pr">
              <img className="img-flow" src={logo} alt="Icono estadisticas" />
              <span className="do-sell">Proformas</span>
            </Link>
          </div>
        </div>
        <div className="cont" >
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/estadisticas">
              <Stadistics />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
