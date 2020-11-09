import React from 'react'
import { Filter } from '../../components/Organism/Filter'
import Container from '@material-ui/core/Container'
import { StyledPlaylistPage } from './styles'

const PlaylitsPage = () => {
  return (
    <StyledPlaylistPage component="main">
      <Container maxWidth="lg">
        <Filter />
      </Container>
    </StyledPlaylistPage>
  )
}

export default PlaylitsPage
