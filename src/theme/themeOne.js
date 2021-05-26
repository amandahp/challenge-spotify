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
      'linear-gradient(to right bottom, #051937, #171228, #190a1a, #12040d, #000000)',
    tertiary: '#1A1F1F',
    default: '#FFF',
    grey: 'linear-gradient(to left top, #303a3a, #293032, #232629, #1c1c1e, #141314, #202021, #2d2d2e, #3b3b3b, #676767, #979797, #cacaca, #ffffff)'
  }
}

const theme = {
  baseValueToRem,
  ...defaultValues
}

export default theme
