import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../Molecule/Card'
import { StyledCardList } from './styles'

const CardList = ({ list }) => {
  return (
    <StyledCardList>
      {list.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </StyledCardList>
  )
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
}

CardList.defaultProps = {
  list: [],
}

export default CardList
