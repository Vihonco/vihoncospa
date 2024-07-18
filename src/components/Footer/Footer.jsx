import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="container">
      <div className="row">
        {/* Sección Izquierda */}
        <div className="col-lg-6">
          <section className="contact-info">
            <div className="contact">
              <h3>Nuestras Sedes</h3>
            </div>
            <div className="sede1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>Sede 1 (Caobos) Av 3E#13-15 Barrio Caobos</h3>
            </div>
            <div className="sede2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>Sede 2 (Calle 9) Calle 9 # 0E-58 Barrio Rosetal</h3>
            </div>
            <div className="sede3">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>Sede Villa del Rosario Carrera 7 # 7-57 Fátima </h3>
            </div>
            <div className="clinica">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>Clinica UBA Vihonco Av.1 #10-48 Barrio Latino </h3>
            </div>
            <div className="sede4">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>Sede 4 Subsidiado Calle 17 # 2e-66 Barrio Caobos</h3>
            </div>
          </section>
        </div>

        {/* Sección Derecha */}
        <div className="col-lg-6">
          <section className="notifications">
          <div className="notificaciones">
              <h2>Contacto</h2>
            
            <div className="notificaciones">
              <h2>Notificaciones Judiciales</h2>
              <a href="">CorreoNotificaciines@ubavihonco.com</a>
            </div>
          </div>
          </section>
        </div>
      </div>
    </div>
    </div>
    
  );
}
