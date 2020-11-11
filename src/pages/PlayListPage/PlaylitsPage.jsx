import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { StyledPlaylistPage } from './styles'
import { PlaylistsCard } from '../../components/Organism/PlaylistsCard'
import { Filter } from '../../components/Organism/Filter'
import { getFilterRequest } from '../../redux/actions/filter'
import {
  getPlaylistRequest,
  filterPlaylist,
} from '../../redux/actions/playlist'

const PlaylitsPage = () => {
  const dispatch = useDispatch()

  const onSearchBarChange = (filter) => {
    dispatch(filterPlaylist({ filter }))
  }

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
    <>
      <Filter onSearchBarChange={onSearchBarChange} />
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
    </>
  )
}

export default PlaylitsPage
