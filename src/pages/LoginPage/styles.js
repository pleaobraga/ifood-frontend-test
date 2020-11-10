import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledLoginPage = styled(Box)`
  ${({ theme }) => `
  background-color: #303030;
  width: 100%;
  height: 100%;
  
  .home {
    &__section {
      margin-top: ${theme.spacing(5)}px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      font-size: 4rem;
      font-weight: bold;
    }

    &__paragraph {
      margin: ${theme.spacing(2)}px;
      font-size: 2rem;
      text-align: center;

      .important-word {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    &__link {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  `}
`
