import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { isEmpty } from 'lodash'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createFormField } from '../../../helpers/utils'
import { StyledAdvancedFilter } from './styles'

const AdvancedFilter = ({ formikProps, filters, isFetching, error }) => {
  const renderFilters = () => {
    if (isFetching) {
      return (
        <Box paddingTop={2}>
          <CircularProgress />
        </Box>
      )
    }

    if (!isEmpty(error)) {
      return (
        <Typography color="textPrimary">
          Houve um erro ao carregar os filtros
        </Typography>
      )
    }

    if (filters.length === 0) {
      return (
        <Typography color="textPrimary">
          Não existem filtros avançados
        </Typography>
      )
    }

    return (
      <Grid
        container
        spacing={2}
        className="dvanced-filter__container"
        wrap="wrap"
      >
        {filters.map((f) => (
          <Grid item md={3} sm={4} xs={12} key={`grid-${f.id}`}>
            {createFormField({ fieldData: f, formikProps })}
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <StyledAdvancedFilter>
      <Typography
        element="h2"
        color="textPrimary"
        className="advanced-filter__title"
      >
        Filtros avançados
      </Typography>
      {renderFilters()}
    </StyledAdvancedFilter>
  )
}

AdvancedFilter.propTypes = {
  formikProps: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
}

AdvancedFilter.defaultProps = {
  filters: [],
}

export default AdvancedFilter
