import React,{useState} from 'react'
import './Header.css'
import Logo1 from '../../assets/Logo1.png'


function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="header">
      <img src={Logo1} alt="Energia fit" className='logo'/>
      <div className={`header-menu ${isOpen && "open"}`}>
        <a href='#about'>Quienes Somos</a>
        <a href='#'>Productos</a>
        <a href='#'>¿Que puedo comer?</a>
        <a href='#'>Contacto</a>
      </div>
      <div className={`toogle ${isOpen && "open"}`}  onClick={()=>setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header