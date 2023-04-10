import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import logo from '../../assets/Logo.png'
import Mapa from '../Map/Map.jsx'
import whatsapp from '../../assets/whatsapp.png'



function Footer() {
  return (
    <div className='f-container'>
      <hr />
      <div className="inter">
        <div className="listado">
            <span>Home</span>
            <span>Productos</span>
            <span>Quienes somos</span>
            <span>Recetas</span>
            <Mapa/>
        </div>
        <div className="footer">
            <div className="social">
              <a href='https://www.facebook.com/energia.fitmarket' target='_blank' rel="noreferrer">
                <img src={facebook} alt="" />
              </a>
              <a href='https://api.whatsapp.com/send?phone=573209990649&text=Hola%20Energ%C3%ADaFit%2C%20quiero%20informaci%C3%B3n%20sobre...%20' target='_blank' rel="noreferrer">
                <img src={whatsapp} alt="" />
              </a>
              <a href='https://www.instagram.com/energia.fitmarket/' target='_blank' rel="noreferrer">
                <img src={instagram} alt="" />
              </a>
            </div>
           <div className="f-logo">
             <img src={logo} alt="" />
           </div>
           <div className="derechos">
             <p>Derechos reservados - 2023</p> 
             <a href='https://github.com/dirguz' target='_blank' rel="noreferrer">
              <img src={github} alt="" />
             </a>
             <a href="https://www.flaticon.es/iconos-gratis/github" title="github iconos">iconos creados por Pixel perfect - Flaticon</a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer