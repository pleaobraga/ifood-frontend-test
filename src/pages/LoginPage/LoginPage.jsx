import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { spotifyURLAuth, saveSpotifyToken } from '../../service/spotifyAuth'
import { StyledLoginPage } from './styles'
import { useQuery } from '../../helpers/url'

const LoginPage = () => {
  let query = useQuery()
  let history = useHistory()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const token = query.get('code')
    const error = query.get('error')

    if (token) {
      saveSpotifyToken(token)
      history.push('/playlist')
    }

    if (error) {
      setHasError(true)
    }
  }, [query, history, setHasError])

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
            Faça login para acessar aplicativo clicando no link a baixo
          </Typography>
          <Link className="home__link" href={spotifyURLAuth}>
            Entrar no Spotifood
          </Link>
          {hasError && (
            <Typography color="error" className="home__paragraph">
              Houve Um erro ao logar na aplicação, tente novamente
            </Typography>
          )}
        </Box>
      </Container>
    </StyledLoginPage>
  )
}

export default LoginPage
