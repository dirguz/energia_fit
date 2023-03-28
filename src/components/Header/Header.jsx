import React from 'react'
import './Header.css'
import Logo1 from '../../assets/Logo1.png'


function Header() {
  return (
    <div className="header">
      <img src={Logo1} alt="Energia fit" className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Recetas</li>
        <li>Testimonios</li>
      </ul>
    </div>
  )
}

export default Header