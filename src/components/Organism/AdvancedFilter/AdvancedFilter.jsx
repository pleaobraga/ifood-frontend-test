import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { createFormField } from '../../../helpers/utils'
import { StyledAdvancedFilter } from './styles'

const AdvancedFilter = ({ formikProps, filters }) => {
  return (
    <StyledAdvancedFilter>
      <Typography
        element="h2"
        color="textPrimary"
        className="advanced-filter__title"
      >
        Filtros avançados
      </Typography>
      <Grid
        container
        spacing={2}
        className="dvanced-filter__container"
        wrap="wrap"
      >
        {filters.map((f) => (
          <Grid item md={2} sm={4} xs={12} key={`grid-${f.id}`}>
            {createFormField({ fieldData: f, formikProps })}
          </Grid>
        ))}
      </Grid>
    </StyledAdvancedFilter>
  )
}

AdvancedFilter.propTypes = {
  formikProps: PropTypes.object.isRequired,
  filters: PropTypes.array,
}

AdvancedFilter.defaultProps = {
  filters: [],
}

export default AdvancedFilter
