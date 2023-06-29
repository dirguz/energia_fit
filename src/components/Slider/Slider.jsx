import React from 'react'
import './Slider.css'
import './NewCard.css'
import Carousel,{ slidesToShowPlugin, autoplayPlugin, slidesToScrollPlugin } from "@brainhubeu/react-carousel"
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
      <article className="card">
      <img
        className="card__background"
        src={s.image}
        alt={s.title}
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{s.title}</h2>
          <p className="card__description">{s.description}</p>
        </div>
      </div>
    </article>)
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
        offset={20}
        breakpoints={{
          770: {
            plugins: ["infinite","arrows",
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          },
          900: {
            plugins: ["infinite","arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              }
            ]
          }
        }
      }
      />
    </div>
  );
}

export default Slider;