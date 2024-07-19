import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import Nosotros from '../Nosotros/Nosotros'
import Footer from '../Footer/Footer'
import Redes from '../Redes/Redes'
import Banner from '../Banner/Banner'
import Servicios from '../Servicios/Servicios'

export default function Home() {
  return (
    <div>
      <Navbar/>
     <div className="container">
     <h1 className=''>Somos contratistas 
      <br />la Nueva EPS </h1>
      <br />
      <h4>
      Eres la prioridad para nosotros</h4>
     
     </div>
     <div className="banner">
      <Banner/>
     </div>
    
     <div className="nosotros">
      <Nosotros/>
     </div>
    <div className="services">
      <Servicios/>
    </div>
     <div className="footer">
      <Footer/>
      <Redes/>
     </div>
    </div>
  )
}
