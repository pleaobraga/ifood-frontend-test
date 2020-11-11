import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card } from '../../Molecule/Card'
import { selectAllFilteredPlaylists } from '../../../redux/reducer/PlaylistReducer'

import { StyledPlaylistsCard } from './styles'

const PlaylistsCard = ({ className }) => {
  const playlists = useSelector(selectAllFilteredPlaylists)

  return (
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
