import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const StyledHeader = styled(Paper)`
  ${({ theme }) => `
  display: flex;
  position: fixed;
  background: ${theme.palette.background.default};
  z-index: 2;
  width: 100%;
  padding-bottom: ${theme.spacing(1)}px;

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
