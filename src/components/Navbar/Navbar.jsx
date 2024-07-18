import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sedes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Agenda tu cita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Asociación de usuarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
