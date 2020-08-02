import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'

const theme = createMuiTheme({
  direction: 'rtl',
  palette,
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans'
    },
    h1: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#000'
    },
    h2: {
      fontSize: 31,
      fontWeight: 'bold',
      color: '#000'
    },
    h3: {
      fontSize: 27,
      fontWeight: 500,
      color: '#000'
    },
    h4: {
      fontSize: 23,
      fontWeight: 500,
      color: '#000'
    },
    h5: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#000'
    },
    h6: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#000'
    },
    body1: {
      fontSize: 16,
      fontWeight: 300,
      color: '#fff'
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      color: '#fff'
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 500,
      color: '#000'
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 300,
      color: '#000'
    },
    caption: {
      fontSize: 12,
      fontWeight: 200,
      color: '#000'
    },
    button: {
      fontSize: 15,
      color: '#000'
    },
    overline: {
      fontSize: 13,
      fontWeight: 500,
      textDecoration: 'line-through',
      color: 'red'
    }
  }
})
export default responsiveFontSizes(theme)
