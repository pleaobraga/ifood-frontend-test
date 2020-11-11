import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import {
  selectFilters,
  selectAllFilters,
  selectHasErrorFilters,
} from '../../../redux/reducer/FilterReducer'
import { getFilterRequest } from '../../../redux/actions/filter'
import { FilterButton } from '../../Atom/FilterButton'
import { FormField } from '../../Molecule/FormField'
import { AdvancedFilter } from '../AdvancedFilter'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import {
  createYupSchema,
  createInitialValues,
} from '../../../helpers/formHelper'
import { StyledFilter } from './styles'
import { Typography } from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const Filter = () => {
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const dispatch = useDispatch()
  const filtersState = useSelector(selectFilters)
  const filters = useSelector(selectAllFilters)
  const hasErrorFilter = useSelector(selectHasErrorFilters)

  const getFilter = useCallback(() => dispatch(getFilterRequest()), [
    dispatch,
    getFilterRequest,
  ])

  useEffect(() => {
    getFilter()
  }, [getFilter])

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters)
  }

  const validationSchema = useMemo(() => createYupSchema(filters), [
    filters,
    createYupSchema,
  ])

  const initialValues = useMemo(
    () => createInitialValues([...filters, { id: 'playListName' }]),
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
                      name="playListName"
                      placeholder="Filtrar por nome"
                      {...formikProps}
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

export default Filter
