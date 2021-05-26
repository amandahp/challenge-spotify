import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.primary};
    color: ${theme.color.default};
    width:  ${theme.baseValueToRem(116)};
    height: ${theme.baseValueToRem(31)};
    border-radius: ${theme.baseValueToRem(6)};
    border: none;
    cursor: pointer;
    &:hover{
      outline: none;
      transform: scale(1.1);
    }
    &:focus{
      outline: none;
    }
  `}
`
