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
      right: ${theme.baseValueToRem(95)};
    };
    .slick-dots{
      margin-left:-26px;
    }
    .slick-prev {
      left:${theme.baseValueToRem(50)};
    };
    .slick-next:before, .slick-prev:before {
      opacity: .75;
      color: ${theme.color.grey};
    }
    
  `}
`
