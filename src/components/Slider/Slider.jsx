import React from 'react'
import './Slider.css'
import Carousel,{ slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from './Slides.jsx'

function Slider() {
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
        slides={Slides}
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