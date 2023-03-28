import React, { useState, useEffect } from 'react'
import './Recipes.css'
import { useDispatch, useSelector } from 'react-redux';
import { get_Recipes } from '../Redux/actions'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

function Recipes() {
  const dispatch= useDispatch();
  useEffect(() => {dispatch(get_Recipes())},[dispatch])
  const recipes=useSelector(state=>state.recipes)

  const [selected, setSelected]= useState(0);

  const recLength = recipes.length
  
  return (
    <div className='recetas'>
        <div className="l-recetas">
            <span>Recetas</span>
            <span>{recipes[selected]?.title.substr(0, 70) + "..."}</span>
            <span>{recipes[selected]?.summary.substr(0, 200) + "..."}</span>
        </div>
        <div className="r-recetas">
          <div></div>
          <div></div>
          <img src={recipes[selected]?.image} alt={recipes[selected]?.title.substr(0, 50) + "..."} />
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