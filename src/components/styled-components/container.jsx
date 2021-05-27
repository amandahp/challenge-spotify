import styled from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => `
  width: 100%;
  position: absolute;
  margin-top:  ${theme.baseValueToRem(70)};
  
`}
`

export const Container = styled.div`
  ${({ theme }) => `
  background-color: ${theme.backgroundColor.primary};
    color: ${theme.color.default};
    width:  ${theme.baseValueToRem(500)};
    height: ${theme.baseValueToRem(340)};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${theme.baseValueToRem(6)};
  `}
`
export const Filter = styled.div`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.primary};
    filter: blur(${theme.baseValueToRem(4)});
    position: absolute;
    z-index: 100;
    width:  ${theme.baseValueToRem(500)};
    height: ${theme.baseValueToRem(340)};
   
    left: 50%;
    transform: translateX(-50%);
  `}
`
