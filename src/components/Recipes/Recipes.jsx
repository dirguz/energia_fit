import React, { useState, useEffect } from 'react'
import './Recipes.css'
import { useDispatch, useSelector } from 'react-redux';
import { get_Recipes } from '../Redux/actions'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';

function Recipes() {
  const dispatch= useDispatch();
  useEffect(() => {dispatch(get_Recipes())},[dispatch])
  const recipes=useSelector(state=>state.recipes)
  const [selected, setSelected]= useState(0);
  const recLength = recipes.length
  const transition={type:'spring',duration:2}
  return (
    <div className='recetas'>
        <div className="blur receta-blur"></div>
        <div className="l-recetas">
            <span>¿Que puedo comer?</span>
            <span>{recipes[selected]?.title.substr(0, 70) + "..."}</span>
            <motion.span
               key={selected}
               initial={{opacity:0, x:-100}}
               animate={{opacity:1, x:0}}
               exit={{opacity:0, x:100}}
               transition={transition}
            >
              {recipes[selected]?.summary.substr(0, 300) + "..."}
            </motion.span>
        </div>
        <div className="r-recetas">
          <motion.div
            initial={{opacity:0, x:-100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1, x:0}}
          ></motion.div>
          <motion.div
            initial={{opacity:0, x:100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1, x:0}}
          ></motion.div>
          <motion.img 
            key={selected}
            initial={{opacity:0, x:100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={transition}
            src={recipes[selected]?.image} alt={recipes[selected]?.title.substr(0, 50) + "..."} 
          />
          <div className="arrows">
            <img 
              onClick={()=>{
              selected === 0 ? setSelected(recLength-1):setSelected((a)=>a-1)              
              }}
              src={leftArrow} alt="" 
            />
            <img 
              onClick={()=>{
                selected === recLength-1 ? setSelected(0):setSelected((a)=>a+1)              
                }}
              src={rightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Recipes