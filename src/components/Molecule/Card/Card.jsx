import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Image } from '../../Atom/Image'
import { StyledCard } from './styles'

const Playlist = ({ link, imgSrc, name }) => {
  const theme = useTheme()

  return (
    <StyledCard theme={theme}>
      <CardContent
        className="card__content"
        component="a"
        target="_blank"
        href={link}
      >
        <Box className="card__image">
          <Image imgSrc={imgSrc} alt="imagem do album" />
        </Box>
        <Typography className="card__title" align="left" color="textPrimary">
          {name}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

Playlist.propTypes = {
  link: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default Playlist
