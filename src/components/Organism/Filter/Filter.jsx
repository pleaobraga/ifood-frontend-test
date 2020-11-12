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
import { AdvancedFilter } from '../AdvancedFilter'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {
  createYupSchema,
  createInitialValues,
} from '../../../helpers/formHelper'
import { SearchBar } from '../../Molecule/SearchBar'
import { StyledFilter } from './styles'
import { Typography } from '@material-ui/core'
import cx from 'classnames'

const Filter = ({ onSearchBarChange, onFiltersChange }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const filtersState = useSelector(selectFilters)
  const filters = useSelector(selectAllFilters)
  const hasErrorFilter = useSelector(selectHasErrorFilters)

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters)
  }

  const validationSchema = useMemo(() => createYupSchema(filters), [filters])

  const initialValues = useMemo(() => {
    const advanced = createInitialValues([...filters])
    return { advanced: advanced, searchBar: '' }
  }, [filters])

  const handleClickAway = () => {
    if (showMoreFilters) {
      setShowMoreFilters(false)
    }
  }
  const AdvancedFilterClassName = cx({ hide: !showMoreFilters })

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
                    <SearchBar
                      formikProps={formikProps}
                      onSearchBarChange={onSearchBarChange}
                    />
                    {filters.length > 0 && !hasErrorFilter && (
                      <FilterButton onClick={toggleMoreFilters} />
                    )}
                  </Box>
                  <AdvancedFilter
                    className={AdvancedFilterClassName}
                    formikProps={formikProps}
                    onValuesChange={onFiltersChange}
                    {...filtersState}
                  />
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
  onSearchBarChange: PropTypes.func,
  onFiltersChange: PropTypes.func,
}

export default Filter
