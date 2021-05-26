import React from 'react'
import Slider from 'react-slick'

import * as S from './styled-components'

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const values = ['example', 'example2', 'example3']
  return (
    <S.Slider>
      <Slider {...settings}>
        {values.map((value, index) => {
          return <h1 key={`${index + value}`}>{value}</h1>
        })}
      </Slider>
    </S.Slider>
  )
}
