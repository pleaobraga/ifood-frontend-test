import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

export const AppProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {children}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export const mockFormikProps = {
  errors: {},
  values: {},
  handleChange: () => {},
  handleBlur: () => {},
  setFieldValue: () => {},
  setFieldTouched: () => {},
}

export const imageLink =
  'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b'

export const card = {
  id: 'test',
  name: 'test',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  },
  images: [
    {
      url: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    },
  ],
}

export const cardList = (number = 6) => {
  const list = []

  for (let i = 0; i < number; i++) {
    const id = card.id + i

    list.push({ ...card, id })
  }

  return list
}
