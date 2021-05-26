import React from 'react'
import Slider from 'react-slick'

import * as S from './styled-components'

export const SimpleSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <S.Slider>
      <Slider {...settings} {...props}></Slider>
    </S.Slider>
  )
}
