import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import {
  selectFilters,
  selectAllFilters,
  selectHasErrorFilters,
} from '../../../reducer/FilterReducer'
import { getFilterRequest } from '../../../actions/filter'
import { FilterButton } from '../../Atom/FilterButton'
import { FormField } from '../../Molecule/FormField'
import { AdvancedFilter } from '../AdvancedFilter'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Box from '@material-ui/core/Box'
import { createYupSchema, createInitialValues } from '../../../helpers/utils'
import { StyledFilter } from './styles'

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

  return (
    filters.length > 0 && (
      <StyledFilter component="section">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange
        >
          {(formikProps) => {
            return (
              <Box className="filter__form" component="form">
                <Box className="main-filter">
                  <FormField
                    name="playListName"
                    placeholder="Pesquise o nome da playlist"
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
                  <AdvancedFilter formikProps={formikProps} {...filtersState} />
                )}
              </Box>
            )
          }}
        </Formik>
      </StyledFilter>
    )
  )
}

export default Filter
