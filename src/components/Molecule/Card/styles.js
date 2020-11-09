import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export const StyledCard = styled(Card)`
  ${({ theme }) => `
  width: 182px;
  margin: 1rem;

  :hover {
    background: ${theme.palette.background.paperHover};
  }

  .card {
    &__content {
      display: flex;
      flex-direction: column;
      text-decoration: none;
    }

    &__image {
      width: 150px;
      height: 150px;
    }

    &__title {
      margin-top: 20px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  `}
`
