import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledAdvancedFilter = styled(Box)`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(2)}px;

  .advanced-filter {
    &__title {
      font-weight: bold;
    }
  }
  `}
`
