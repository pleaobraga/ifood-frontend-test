import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledFilter = styled(Box)`
  ${({ theme }) => `
  display: flex;
  margin: 0 1rem;

  .filter {
    &__form {
      display: flex;
      flex-direction: column;
      width: 100%;

      .main-filter {
        display: flex;
        width: 100%;
        align-items: center;
      }
    }
  }

  .brand {
    margin-right: 3rem;
    font-size: 2rem;
    font-weight: bold;

    ${theme.breakpoints.down('sm')} {
      margin-right: 1.5rem;
    }


    ${theme.breakpoints.down('xs')} {
      display:none
    }
  }
  `}
`
