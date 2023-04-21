import React from 'react'
import './About.css'
import comida from '../../assets/comida.png'

function About() {
  return (
    <div className="about">
      <div className="l-about">
        <img src="https://images2.imgbox.com/f7/bf/u2A8dbYi_o.jpg" alt="imgbox" />
        <img src="https://images2.imgbox.com/42/18/jlS2gbFp_o.jpg" alt="imgbox" />
        <img src="https://images2.imgbox.com/0a/ec/aOqQgjCf_o.jpg" alt="imgbox" />
        <img src="https://images2.imgbox.com/8d/51/fIWJO3sR_o.jpg" alt="imgbox" />
      </div>
      <div className="r-about">
        <div className="blur about-blur"></div>
        <span id='about'>Quienes somos</span>
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