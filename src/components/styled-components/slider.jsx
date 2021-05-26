import styled from 'styled-components'

export const Slider = styled.div`
  ${({ theme }) => `
    .slick-slider{
      margin-left: ${theme.baseValueToRem(50)};
      margin-top: ${theme.baseValueToRem(50)};
    };
    .slick-list{
      background-image: ${theme.backgroundColor.grey};
      background-repeat: no-repeat;
      background-attachment: fixed;
      width:  ${theme.baseValueToRem(169)};
      height: ${theme.baseValueToRem(265)};
      margin-left: ${theme.baseValueToRem(114)};
      border-radius: ${theme.baseValueToRem(4)};
    };
    .slick-next{
      right: 55px;
    };
    .slick-prev {
      left: 50px;
    };
    .slick-next:before, .slick-prev:before {
      opacity: .75;
      color: ${theme.color.grey};
    }
  `}
`
