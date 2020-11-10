import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledPlaylistPage = styled(Box)`
  ${({ theme }) => `
  background-color: #303030;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  .page{

    &__title {
      font-size: 2.5rem;
      font-weight: bold;
      
      margin-top: ${theme.spacing(3)}px;
      margin-bottom: ${theme.spacing(2)}px;


    }
  }

   `}
`
