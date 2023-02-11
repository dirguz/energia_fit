import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className="left-h">
            <Header/>
        </div>
        <div className="right-h">right side</div>
    </div>
  )
}

export default Hero