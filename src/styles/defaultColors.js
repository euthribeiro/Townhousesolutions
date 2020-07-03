import Color from 'color';

const PRIMARY = '#0B4175';
const SECONDARY = '#384644';
const PRIMARYALPHA = 'rgba(14, 76, 139, 0.9)';
const ALTERNATIVE = '#CAEDEB';

export default {
  warning: '#E8AE0C',
  white: '#FFF',
  backgroundLight: '#fcfcfc',
  background: '#fff',
  lighter: '#EEE',
  light: '#DDD',
  semiRegular: '#cfcfcf',
  regular: '#999',
  dark: '#666',
  middleDark: '#888',
  darker: '#333',
  black: '#000',
  primaryAlpha: PRIMARYALPHA,
  primary: PRIMARY,
  alternative: ALTERNATIVE,
  primaryLight: Color(PRIMARY)
    .lighten(0.15)
    .hex(),
  primaryHightLight: Color(PRIMARY)
    .lighten(0.25)
    .hex(),
  primaryVeryHightLight: Color(PRIMARY)
    .lighten(0.55)
    .hex(),
  primaryDarken: Color(PRIMARY)
    .darken(0.15)
    .hex(),
  primaryHightDarken: Color(PRIMARY)
    .darken(0.25)
    .hex(),
  primaryVeryHightDarken: Color(PRIMARY)
    .darken(0.55)
    .hex(),
  secundary: SECONDARY,
  secundaryLowDarken: Color(SECONDARY)
    .darken(0.05)
    .hex(),
  secundaryDarken: Color(SECONDARY)
    .darken(0.15)
    .hex(),
  secundaryHightDarken: Color(SECONDARY)
    .darken(0.25)
    .hex(),
  secundaryVeryHightDarken: Color(SECONDARY)
    .darken(0.55)
    .hex(),
  secundaryLight: Color(SECONDARY)
    .lighten(0.15)
    .hex(),
  secundaryHightLight: Color(SECONDARY)
    .lighten(0.25)
    .hex(),
  secundaryVeryHightLight: Color(SECONDARY)
    .lighten(0.55)
    .hex(),
  success: PRIMARY,
  danger: '#E37a7a',
  red: '#af0b19',
  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  hightDarkTransparent: 'rgba(0, 0, 0, 0.8)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
