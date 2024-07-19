import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button } from 'react-bootstrap';
import './servicios.css'; // Asegúrate de importar tu archivo CSS

export default function Servicios() {
  const [openConsulta, setOpenConsulta] = useState(false);
  const [openCirugia, setOpenCirugia] = useState(false);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Algunos de nuestros servicios en UBA</h2>
      <p className="text-center mb-4">Recuerda que siempre eres nuestra prioridad!</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card servicios-card consulta-medica">
            <div className="card-body">
              <h5 className="card-title">01. Consulta médica general</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card servicios-diagnosticos">
            <div className="card-body">
              <h5 className="card-title">02. Servicios diagnósticos</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card odontologia">
            <div className="card-body">
              <h5 className="card-title">03. Odontología</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card fisioterapia">
            <div className="card-body">
              <h5 className="card-title">04. Fisioterapia y rehabilitación</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card hospitalizacion-adultos">
            <div className="card-body">
              <h5 className="card-title">05. Hospitalización Adultos</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card transporte-asistencial">
            <div className="card-body">
              <h5 className="card-title">06. Transporte Asistencial Básico</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card consulta-especializada">
            <div className="card-body">
              <h5 className="card-title">07. Consulta Especializada</h5>
              <Button
                onClick={() => setOpenConsulta(!openConsulta)}
                aria-controls="collapse-consulta"
                aria-expanded={openConsulta}
                variant="primary"
                className="mt-3"
              >
                Conoce más
              </Button>
              <Collapse in={openConsulta}>
                <div id="collapse-consulta" className="mt-3">
                  <ul className="list-unstyled">
                    <li>Ginecología y Obstetricia</li>
                    <li>Ortopedia</li>
                    <li>Pediatra</li>
                    <li>Cirugía General</li>
                    <li>Psiquiatra</li>
                    <li>Neumología</li>
                    <li>Medicina física y rehabilitación</li>
                    <li>Medicina interna</li>
                    <li>Neurología</li>
                    <li>Cardiología</li>
                    <li>Anestesiología</li>
                    <li>Medicina Laboral</li>
                    <li>Urología</li>
                    <li>Reumatología</li>
                    <li>Otorrinolaringología</li>
                    <li>Gastroenterología</li>
                    <li>Dermatología</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card cirugia-ambulatoria">
            <div className="card-body">
              <h5 className="card-title">08. Cirugía Ambulatoria</h5>
              <Button
                onClick={() => setOpenCirugia(!openCirugia)}
                aria-controls="collapse-cirugia"
                aria-expanded={openCirugia}
                variant="primary"
                className="mt-3"
              >
                Conoce más
              </Button>
              <Collapse in={openCirugia}>
                <div id="collapse-cirugia" className="mt-3">
                  <ul className="list-unstyled">
                    <li>Cirugía general</li>
                    <li>Cirugía ginecológica</li>
                    <li>Cirugía maxilofacial</li>
                    <li>Cirugía oftalmológica</li>
                    <li>Cirugía otorrinolaringológica</li>
                    <li>Cirugía ortopédica</li>
                    <li>Cirugía oral</li>
                    <li>Cirugía plástica y estética</li>
                    <li>Cirugía vascular y angiológica</li>
                    <li>Cirugía urológica</li>
                    <li>Cirugía de mano</li>
                    <li>Cirugía de mama y tejidos blandos no oncológica</li>
                    <li>Cirugía dermatológica</li>
                    <li>Cirugía gastrointestinal</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
         
        </div>
        <div className="col">
          <div className="card servicios-card transporte-asistencial">
            <div className="card-body">
              <h5 className="card-title">Contacto</h5>
              <h5>607-5955846</h5>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
