import styled from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => `      
    background-color: ${theme.backgroundColor.grey};
    color: ${theme.color.primary};
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
