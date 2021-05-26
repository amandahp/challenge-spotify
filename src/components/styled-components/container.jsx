import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => `
    color: ${theme.color.default};
    width:  ${theme.baseValueToRem(447)};
    height: ${theme.baseValueToRem(321)};
    position: relative;
    z-index: 101;
  `}
`
export const Filter = styled.div`
  ${({ theme }) => `
    background-color: ${theme.backgroundColor.primary};
    filter: blur(${theme.baseValueToRem(4)});
    position: absolute;
    left: ${theme.baseValueToRem(0)};
    top: ${theme.baseValueToRem(50)};
    z-index: 100;
    width:  ${theme.baseValueToRem(447)};
    height: ${theme.baseValueToRem(321)};
  `}
`
