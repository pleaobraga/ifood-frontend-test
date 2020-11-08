import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import {
  getFilterAction,
  selectFilters,
  selectAllFilters,
  selectHasErrorFilters,
} from '../../../redux/FilterReducer'
import { FilterButton } from '../../Atom/FilterButton'
import { FormField } from '../../Molecule/FormField'
import { AdvancedFilter } from '../AdvancedFilter'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { StyledFilter, StyledForm, MainFilter } from './styles'

const Filter = () => {
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const dispatch = useDispatch()
  const filtersState = useSelector(selectFilters)
  const filters = useSelector(selectAllFilters)
  const hasErrorFilter = useSelector(selectHasErrorFilters)

  const getFilter = useCallback(() => dispatch(getFilterAction()), [dispatch])

  useEffect(() => {
    getFilter()
  }, [getFilter])

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters)
  }

  return (
    <StyledFilter component="section">
      <Formik initialValues={{}} validationSchema={{}}>
        {(formikProps) => {
          return (
            <StyledForm component="form">
              <MainFilter>
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
              </MainFilter>

              {showMoreFilters && (
                <AdvancedFilter formikProps={formikProps} {...filtersState} />
              )}
            </StyledForm>
          )
        }}
      </Formik>
    </StyledFilter>
  )
}

export default Filter
