import React from 'react'
import Header from '../Header/Header'
import heart from '../../assets/heart.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className="left">
            <Header/>
            <div className="best">
              <div></div>
              <span>Hábitos saludables que marcan la diferencia</span>
            </div>
            <div className="text">
               <div>
                <span className='stroke-text'>alimenta </span>
                <span>tu</span>
               </div>
               <div><span>bienestar</span></div>
               <div><span>Amor propio es elegir tu bienestar a través de una alimentación sana y consciente</span></div>
            </div>
            <div className="figures">
              <div>
                <span>+20</span>
                <span>marcas</span>
              </div>
              <div>
                <span>+100</span>
                <span>productos</span>
              </div>
              <div>
                <span>Y muchas</span>
                <span>recetas</span>
              </div>
            </div>
            <div className="buttons">
              <button className='btn'>Get start</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right">
          <button className="btn">Join Us</button>
          <div className="heart">
            <img src={heart} alt="heart rate" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
        </div>
    </div>
  )
}

export default Hero