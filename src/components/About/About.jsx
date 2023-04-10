import React from 'react'
import './About.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import comida from '../../assets/comida.png'

function About() {
  return (
    <div className="about" id='about'>
      <div className="l-about">
        <img src={pic3} alt="" />
        <img src={pic2} alt="" />
        <img src={pic1} alt="" />
        <img src={pic4} alt="" />
      </div>
      <div className="r-about">
        <span>Quienes somos</span>
        <div>
          <span className='stroke-text'>energia</span>
          <span> - fit</span>
        </div>
        <div className='detail-r'>
          <img src={comida} alt="" />
          <span>Somos un mercado saludable que desea ayudar a mejorar tu calida de vida a través de productos sanos, organicos y deliciosos</span>
          <span>Queremos acompañarte en el reto de crear consciencia sobre tus alimentos y rutinas diarias, y de paso, apoyamos los emprendimientos y productos locales.</span>
          <span>Recuerda que las decisiones de hoy seran determinantes en tu futuro... Elige bien!</span>
        </div>
      </div>
    </div>
  )
}

export default About