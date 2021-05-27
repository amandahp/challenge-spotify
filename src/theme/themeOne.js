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
    dark: '#000000',
    background:
      'linear-gradient(108.15deg, #000000 8.8%, #051937 100.55%), #051937'
  },

  backgroundColor: {
    primary: '#00D856',
    secondary:
      ' linear-gradient(220deg, rgba(2,14,6,1) 36%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
    tertiary: '#1A1F1F',
    default: '#FFF',
    grey: '#282828',
    dark: '#000000'
  }
}

const theme = {
  baseValueToRem,
  ...defaultValues
}

export default theme
