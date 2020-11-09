import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import { ImageContainer } from './styles'

const Image = ({ imgSrc, alt }) => {
  const theme = useTheme()
  const [hasImgError, setHasImgError] = useState(false)

  const handleImageError = () => {
    setHasImgError(true)
  }

  return (
    <ImageContainer theme={theme}>
      {hasImgError || !imgSrc ? (
        <InsertPhotoIcon theme={theme} className="bg-icon" />
      ) : (
        <img
          className="card__image"
          src={imgSrc}
          onError={handleImageError}
          alt={alt}
        />
      )}
    </ImageContainer>
  )
}

Image.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
}

export default Image
