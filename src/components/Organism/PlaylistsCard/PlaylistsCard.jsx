import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card } from '../../Molecule/Card'
import {
  selectAllFilteredPlaylists,
  selectIsFetchingPlaylists,
} from '../../../redux/reducer/PlaylistReducer'
import Typography from '@material-ui/core/Typography'
import Loading from '../../Atom/Loading'

import { StyledPlaylistsCard } from './styles'

const PlaylistsCard = ({ className }) => {
  const playlists = useSelector(selectAllFilteredPlaylists)
  const isFetching = useSelector(selectIsFetchingPlaylists)
  const hasError = useSelector(selectIsFetchingPlaylists)

  if (isFetching) return <Loading />

  if (hasError) {
    return (
      <Typography color="textPrimary">
        Houve um erro ao apresentar o resultado, confira os filtros e tente
        novamente
      </Typography>
    )
  }

  return playlists.length === 0 ? (
    <Typography color="textPrimary">Nenhum item a ser exibido.</Typography>
  ) : (
    <StyledPlaylistsCard className={className}>
      {playlists.map(({ external_urls, id, name, images }) => {
        return (
          <Card
            key={id}
            name={name}
            imgSrc={images[0].url}
            link={external_urls.spotify}
          />
        )
      })}
    </StyledPlaylistsCard>
  )
}

PlaylistsCard.propTypes = {
  className: PropTypes.string,
}

PlaylistsCard.defaultProps = {
  className: '',
}

export default PlaylistsCard
