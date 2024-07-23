import React from 'react'
import sede1 from '../../assets/sedes/sede-1.jpg'
import sede2 from '../../assets/sedes/sede-2.jpg'
import sede3 from '../../assets/sedes/calle17.jpg'
import sede4 from '../../assets/sedes/clinica.jpg'
import sede5 from '../../assets/sedes/ROSA.jpeg'

export default function Banner() {
  return (
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sede1} class="d-block w-100" alt="Img Not Found" height="350px"/>
    </div>
    <div class="carousel-item">
      <img src={sede2} class="d-block w-100" alt="Img Not Found" height="350px"/>
    </div>
    <div class="carousel-item">
      <img src={sede3} class="d-block w-100" alt="Img Not Found" height="350px"/>
    </div>
    <div class="carousel-item active">
      <img src={sede4} class="d-block w-100" alt="Img Not Found" height="350px"/>
    </div>
    <div class="carousel-item active">
      <img src={sede5} class="d-block w-100" alt="Img Not Found" height="650px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
