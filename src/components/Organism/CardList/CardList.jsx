import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../Molecule/Card'
import { StyledCardList } from './styles'

const CardList = ({ list, className }) => {
  return (
    <StyledCardList className={className}>
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
  className: PropTypes.string,
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
  className: '',
}

export default CardList
