import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const ThemeWrapper = ({ children, store }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MuiThemeProvider>
)

export default ThemeWrapper
