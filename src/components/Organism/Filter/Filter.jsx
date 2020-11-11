import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import {
  selectFilters,
  selectAllFilters,
  selectHasErrorFilters,
} from '../../../redux/reducer/FilterReducer'
import { FilterButton } from '../../Atom/FilterButton'
import { FormField } from '../../Molecule/FormField'
import { AdvancedFilter } from '../AdvancedFilter'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {
  createYupSchema,
  createInitialValues,
} from '../../../helpers/formHelper'
import { StyledFilter } from './styles'
import { Typography } from '@material-ui/core'

const Filter = ({ onBarInputChange }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const filtersState = useSelector(selectFilters)
  const filters = useSelector(selectAllFilters)
  const hasErrorFilter = useSelector(selectHasErrorFilters)

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters)
  }

  const validationSchema = useMemo(() => createYupSchema(filters), [
    filters,
    createYupSchema,
  ])

  const initialValues = useMemo(
    () => createInitialValues([...filters, { id: 'filterBar' }]),
    [filters, createInitialValues]
  )

  const handleClickAway = () => {
    if (showMoreFilters) {
      setShowMoreFilters(false)
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyledFilter component="header">
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange
            enableReinitialize
          >
            {(formikProps) => {
              const onFilterBarChange = (event) => {
                onBarInputChange(event.target.value)
                formikProps.handleChange(event)
              }

              return (
                <Box className="filter__form" component="form">
                  <Box className="main-filter">
                    <Typography
                      className="brand"
                      component="h2"
                      color="primary"
                    >
                      Spotifood
                    </Typography>
                    <FormField
                      name="filterBar"
                      placeholder="Filtrar por nome"
                      {...formikProps}
                      handleChange={onFilterBarChange}
                      inputPropsTF={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {filters.length > 0 && !hasErrorFilter && (
                      <FilterButton onClick={toggleMoreFilters} />
                    )}
                  </Box>

                  {showMoreFilters && (
                    <AdvancedFilter
                      formikProps={formikProps}
                      {...filtersState}
                    />
                  )}
                </Box>
              )
            }}
          </Formik>
        </Container>
      </StyledFilter>
    </ClickAwayListener>
  )
}

Filter.propTypes = {
  onBarInputChange: PropTypes.func,
}

export default Filter
