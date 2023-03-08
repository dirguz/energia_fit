import React from 'react'
import './Slider.css'
import datos from '../../assets/Productos/datos.json'


let slides = datos.result.map(s=>{
    return(
    <div className='slide-container'>
        <img src={s.image} alt={s.title}/>
        <div className='slide-desc'>
            <span>{s.title}</span>
        </div>
    </div>)
});

export default slides;