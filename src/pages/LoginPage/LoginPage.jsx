import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { spotifyURLAuth } from '../../service/spotifyAuth'
import { StyledLoginPage } from './styles'

const LoginPage = () => {
  return (
    <StyledLoginPage component="main">
      <Container maxWidth="lg" className="home__container">
        <Box component="section" className="home__section">
          <Typography
            className="home__title"
            component="h1"
            color="textPrimary"
          >
            Spotifood
          </Typography>
          <Typography color="textPrimary" className="home__paragraph">
            <Typography component="b" className="important-word">
              Spotifood
            </Typography>{' '}
            é um aplicativo open source que permite ao usuario pesquisar por
            playlists do
            <Typography component="b" className="important-word">
              {' '}
              Spotify{' '}
            </Typography>
          </Typography>
          <Typography color="textPrimary" className="home__paragraph">
            Faça login do aplicativo pelo clicando no link a baixo
          </Typography>
          <Link className="home__link" href={spotifyURLAuth}>
            Entrar no Spotifood
          </Link>
        </Box>
      </Container>
    </StyledLoginPage>
  )
}

export default LoginPage
