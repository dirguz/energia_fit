import React from 'react'
import Header from '../Header/Header'
import heart from '../../assets/heart.png'
import hero from '../../assets/hero_image.png'
import heroback from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import './Hero.css'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

function Hero() {
  const transition={type:'spring',duration:2}
  const mobile=window.innerWidth<=768 ? true : false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
        <div className="left">
            <Header/>
            <div className="best">
              <motion.div 
              initial={{left: mobile ? '165px':'260px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type:'tween'}}>
              </motion.div>
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
                <span><CountUp 
                end={20}
                prefix="+ "
                duration={4}
                /></span>
                <span>marcas</span>
              </div>
              <div>
                <span><CountUp
                end={100}
                prefix="+ "
                duration={3}
                /></span>
                <span>productos</span>
              </div>
              <div>
                <span>Y muchas</span>
                <span>recetas</span>
              </div>
            </div>
            {/* <div className="buttons">
              <button className='btn'><Link
              to='products'
              span={true}
              smooth={true}
              >Productos</Link></button>
              <button className='btn'><Link
              to='contact'
              span={true}
              smooth={true}
              >Contacto</Link></button>
            </div> */}
        </div>
        <div className="right">
          {/* <button className="btn">Join Us</button> */}
          <motion.div className="heart"
            initial={{right: "-1rem"}}
            whileInView={{right: '4rem'}}
            transition={transition}
          >
            <img src={heart} alt="heart rate" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          <img src={hero} alt="hero-image" className='hero_img' />
          <motion.img 
            initial={{right: "11rem"}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={heroback} alt="hero-back" className='hero_back'/
          >
          <motion.div className="calories"
            initial={{right: "37rem"}}
            whileInView={{right: '28rem'}}
            transition={transition}
          >
            <img src={calories} alt="calories" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero