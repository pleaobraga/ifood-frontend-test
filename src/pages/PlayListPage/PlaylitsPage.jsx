import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPlaylistRequest } from '../../redux/actions/playlist'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { StyledPlaylistPage } from './styles'
import { PlaylistsCard } from '../../components/Organism/PlaylistsCard'
import { getFilterRequest } from '../../redux/actions/filter'

const PlaylitsPage = () => {
  const dispatch = useDispatch()

  const getFilter = useCallback(() => dispatch(getFilterRequest()), [
    dispatch,
    getFilterRequest,
  ])

  useEffect(() => {
    getFilter()
  }, [getFilter])

  const getPlaylist = useCallback(() => dispatch(getPlaylistRequest()), [
    dispatch,
    getPlaylistRequest,
  ])

  useEffect(() => {
    getPlaylist()
  }, [getPlaylist])

  return (
    <StyledPlaylistPage component="main">
      <Container className="page__container" maxWidth="lg">
        <Box component="section">
          <Typography
            component="h1"
            color="textPrimary"
            className="page__title"
          >
            Playlists
          </Typography>
          <PlaylistsCard className="page__card-list" />
        </Box>
      </Container>
    </StyledPlaylistPage>
  )
}

export default PlaylitsPage
