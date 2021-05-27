import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.primary};
    color: ${theme.color.grey};
    width:  ${theme.baseValueToRem(116)};
    height: ${theme.baseValueToRem(33)};
    border-radius: ${theme.baseValueToRem(6)};
    left: 64%;
    position: absolute;
    transform: translateX(-50%);
    border: none;
    cursor: pointer;
    &:hover{
      outline: none;
      
    }
    &:focus{
      outline: none;
    }
  `}
`
