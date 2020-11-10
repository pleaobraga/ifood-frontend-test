import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const StyledPlaylistPage = styled(Box)`
  ${({ theme }) => `
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background: ${theme.palette.background.default};

  .page{

    &__container {
      background: ${theme.palette.background.default};
    }

    &__title {
      font-size: 2.5rem;
      font-weight: bold;
      
      margin-top: ${theme.spacing(3)}px;
      margin-bottom: ${theme.spacing(2)}px;

      ${theme.breakpoints.down('xs')} {
        text-align: center;
      }
    }

    &__card-list {
      ${theme.breakpoints.down('xs')} {
        justify-content: space-around;
      }
    }
  }

   `}
`
