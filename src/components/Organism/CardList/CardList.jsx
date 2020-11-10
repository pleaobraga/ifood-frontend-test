import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../Molecule/Card'
import { StyledCardList } from './styles'

const CardList = ({ list }) => {
  return (
    <StyledCardList>
      {list.map(({ external_urls, id, name, images }) => {
        return (
          <Card
            key={id}
            name={name}
            imgSrc={images[0].url}
            link={external_urls.spotify}
          />
        )
      })}
    </StyledCardList>
  )
}

CardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      external_urls: PropTypes.shape({
        spotify: PropTypes.string,
      }),
      id: PropTypes.string,
      name: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
    })
  ),
}

CardList.defaultProps = {
  list: [],
}

export default CardList
