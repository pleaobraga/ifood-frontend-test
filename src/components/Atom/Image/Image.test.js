import React from 'react'
import { mount } from 'enzyme'
import Image from './Image'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'

const setup = (imgSrc = '') => {
  return mount(
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Image imgSrc={imgSrc} alt="test" />)
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

describe('Image', () => {
  it('should render component properly', () => {
    const wrapper = setup()
    expect(wrapper.find(Image).length).toBe(1)
  })

  it('should render error image', () => {
    const wrapper = setup()
    expect(wrapper.find('.bg-icon').exists()).toBe(true)
  })

  it('should render  image', () => {
    const wrapper = setup(
      'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b'
    )
    expect(wrapper.find('.card__image').exists()).toBe(true)
  })
})
