import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/theme'

const ThemeWrapper = ({ children, store }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
