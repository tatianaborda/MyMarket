import React from "react";
import {CartWidget} from './CartWidget';
import { Link } from "react-router-dom"


export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">ÉTER TIENDA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/quienessomos">Quienes somos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/list">Remeras</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Collares</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Bordados personalizados</a>
      </li>
      </ul>
    </div>
    <CartWidget/>
    </nav>
    )
}