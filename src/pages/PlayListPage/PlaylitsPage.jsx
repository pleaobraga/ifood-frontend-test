import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPlaylistRequest } from '../../redux/actions/playlist'
import { Filter } from '../../components/Organism/Filter'
import Container from '@material-ui/core/Container'

import { StyledPlaylistPage } from './styles'

const PlaylitsPage = () => {
  const dispatch = useDispatch()

  const getPlaylist = useCallback(() => dispatch(getPlaylistRequest()), [
    dispatch,
    getPlaylistRequest,
  ])

  useEffect(() => {
    getPlaylist()
  }, [getPlaylist])

  return (
    <StyledPlaylistPage component="main">
      <Container maxWidth="lg">
        <Filter />
      </Container>
    </StyledPlaylistPage>
  )
}

export default PlaylitsPage
