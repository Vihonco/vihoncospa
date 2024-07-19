import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faBullseye, faHeartbeat, faBalanceScale, faComments, faAdjust } from "@fortawesome/free-solid-svg-icons";
import './nosotros.css'

export default function Nosotros() {
  return (
    <div className="container nosotros">
      <h2 className="text-center my-5">Valores que nos caracterizan</h2>
      <h4>en UBA Vihonco S.A.S</h4>
      <Carousel>
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faHandshake} size="3x" className="mb-3" />
                  <Card.Title>Respeto</Card.Title>
                  <Card.Text>
                    Valorar los intereses y necesidades de otro individuo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faBullseye} size="3x" className="mb-3" />
                  <Card.Title>Compromiso</Card.Title>
                  <Card.Text>
                    Reflejar en su trabajo el compromiso con la Institución y
                    la comunidad para satisfacer las expectativas y necesidades
                    de los usuarios y sus familias.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faHeartbeat} size="3x" className="mb-3" />
                  <Card.Title>Solidaridad</Card.Title>
                  <Card.Text>
                    Se refleja en el servicio y búsqueda del bien común, actuar
                    a favor de otras personas desinteresadamente, con alegría,
                    teniendo en cuenta la utilidad y la necesidad del aporte
                    para los usuarios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faBalanceScale} size="3x" className="mb-3" />
                  <Card.Title>Honestidad</Card.Title>
                  <Card.Text>
                    Es el respeto a la verdad en relación con el mundo, los
                    hechos y las personas; comportarse y expresarse con
                    coherencia y sinceridad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faComments} size="3x" className="mb-3" />
                  <Card.Title>Amabilidad</Card.Title>
                  <Card.Text>
                    La amabilidad se relaciona con el respeto, la solidaridad,
                    la tolerancia y la sociabilidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faAdjust} size="3x" className="mb-3" />
                  <Card.Title>Equidad</Card.Title>
                  <Card.Text>
                    Dar a cada uno lo que le corresponde según sus necesidades,
                    méritos, capacidades o atributos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
