import styled from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => `      
    background-image: ${theme.backgroundColor.grey};
    background-repeat: no-repeat;
    background-attachment: fixed; 
    color: ${theme.color.tertiary};
    width:  ${theme.baseValueToRem(335)};
    height: ${theme.baseValueToRem(31)};
    border-radius: ${theme.baseValueToRem(6)};
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
