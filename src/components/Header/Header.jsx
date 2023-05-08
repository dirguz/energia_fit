import React,{useState} from 'react'
import './Header.css'
import Logo1 from '../../assets/Logo1.png'
import { Link } from 'react-scroll';


function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="header">
      <img src={Logo1} alt="Energia fit" className='logo' id='home'/>
      <div className={`header-menu ${isOpen && "open"}`}>
        <a><Link
        onClick={()=>setIsOpen(!isOpen)}
        to='about'
        span={true}
        smooth={true}
        >Quienes Somos</Link>
        </a>
        <a><Link
        onClick={()=>setIsOpen(!isOpen)}
        to='products'
        span={true}
        smooth={true}
        >Productos</Link>
        </a>
        <a><Link
        onClick={()=>setIsOpen(!isOpen)}
        to='recipes'
        span={true}
        smooth={true}
        >¿Que puedo comer?</Link>
        </a>
        <a><Link
        onClick={()=>setIsOpen(!isOpen)}
        to='contact'
        span={true}
        smooth={true}
        >Contacto</Link>
        </a>
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