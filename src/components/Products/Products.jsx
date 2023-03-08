import React from 'react'
import Slider from '../Slider/Slider.jsx'
import './Products.css'

function Products() {
  return (
    <div className="products" id="products">
      <div className="product-header">
         <span>conoce</span>
         <span>los productos</span>
         <span>que ofrecemos</span>
      </div>
      <div>
        <Slider/>
      </div>
    </div>
  )
}

export default Products