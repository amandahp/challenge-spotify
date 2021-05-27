import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.dark};
    color: ${theme.color.primary};
    width:  ${theme.baseValueToRem(116)};
    height: ${theme.baseValueToRem(33)};
    border-radius: ${theme.baseValueToRem(6)};
    left: 64%;
    position: absolute;
    transform: translateX(-50%);
    border: 3px solid  ${theme.color.primary} ;
    cursor: pointer;
    &:hover{
      outline: none;
      background-color:  ${theme.color.primary};
      color:  ${theme.backgroundColor.dark};
    }
    &:focus{
      outline: none;
    }
  `}
`
