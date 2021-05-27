import styled from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => `      
    background-image: ${theme.backgroundColor.grey};
    background-repeat: no-repeat;
    color: ${theme.color.tertiary};
    width:  ${theme.baseValueToRem(375)};
    height: ${theme.baseValueToRem(31)};
    border-radius: ${theme.baseValueToRem(6)};
    position:  absolute;
    left: 43.5%;
    transform: translateX(-43%);
    border: none;
    cursor: text;
    &:hover{
      outline: none;
    }
    &:focus{
      outline: none;
    }
  `}
`
