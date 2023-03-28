import React from 'react'
import './Slider.css'
import Carousel,{ slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_All } from '../Redux/actions'

function Slider() {

  const dispatch= useDispatch();
  useEffect(() => {dispatch(get_All())},[dispatch])

  const datos=useSelector(state=>state.products)
  let slides = datos.map(s=>{
    return(
    <div className='slide-container'>
        <img src={s.image} alt={s.title}/>
        <div className='slide-desc'>
            <span>{s.title}</span>
        </div>
        <p>{s.description.substr(0, 150) + "..."}</p>
    </div>)
});

  return (
    <div className="carousel-container">
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
          // {
          //   resolve: autoplayPlugin,
          //   options: {
          //     interval: 3000,
          //   }
          // }
        ]}
        slides={slides}
        offset={50}
        breakpoints={{
          960: {
            plugins: ["infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default Slider;