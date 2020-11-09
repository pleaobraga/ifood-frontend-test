import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledFilter = styled(Box)`
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
      }
    }
  }
`
