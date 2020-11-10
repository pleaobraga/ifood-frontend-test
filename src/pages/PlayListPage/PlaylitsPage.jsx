import React from 'react'
import { Filter } from '../../components/Organism/Filter'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { StyledPlaylistPage } from './styles'

const REACT_APP_CLIENT_ID = '6653e6dd7ded4f00b21395329483c0d5'
const REDIRECT_URI = 'http://localhost:8080'

const PlaylitsPage = () => {
  const spotifyRedirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`

  console.log('spotifyRedirect', spotifyRedirect)

  return (
    <StyledPlaylistPage component="main">
      <Container maxWidth="lg">
        <Filter />
        <Box component="a" href={spotifyRedirect}>
          test
        </Box>
      </Container>
    </StyledPlaylistPage>
  )
}

export default PlaylitsPage
