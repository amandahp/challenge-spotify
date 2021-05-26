import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.primary};
    width:  ${theme.baseValueToRem(116)};
    height: ${theme.baseValueToRem(31)};
    border-radius: ${theme.baseValueToRem(6)};
    border: none;
    cursor: pointer;
    &:hover{
      background-image: ${theme.backgroundColor.secondary};
      outline: none;
    }
    &:focus{
      background-color: ${theme.backgroundColor.tertiary};
      color: ${theme.backgroundColor.primary};
      outline: none;
    }
  `}
`
