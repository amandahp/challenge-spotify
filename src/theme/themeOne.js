const baseValueToRem = (multiplicator) => {
  return `${multiplicator / 16}rem`
}

const defaultValues = {
  color: {
    primary: '#00D856',
    secondary:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0) 100%), #1A1F1F',
    tertiary: '#1A1F1F',
    default: '#FFF',
    grey: '#808080',
    background:
      'linear-gradient(108.15deg, #000000 8.8%, #051937 100.55%), #051937'
  },

  backgroundColor: {
    primary: '#00D856',
    secondary:
      'linear-gradient(207deg, rgba(2,0,36,1) 13%, rgba(0,0,0,1) 51%);',
    tertiary: '#1A1F1F',
    default: '#FFF',
    grey: 'linear-gradient(193deg, rgba(255,255,255,1) 0%, rgba(184,184,184,1) 10%, rgba(88,88,88,1) 53%, rgba(85,85,85,1) 65%, rgba(85,85,85,1) 93%)'
  }
}

const theme = {
  baseValueToRem,
  ...defaultValues
}

export default theme
