import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    background: {
      paperHover: '#505050',
    },
  },
})

export default theme
