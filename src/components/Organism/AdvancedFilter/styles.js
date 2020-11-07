import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledAdvancedFilter = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  .advanced-filter {
    &__title {
      font-weight: bold;
    }
  }
`
