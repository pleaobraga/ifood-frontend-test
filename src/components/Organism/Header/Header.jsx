import React, { useState, useMemo } from 'react'
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
import { StyledHeader } from './styles'
import { Typography } from '@material-ui/core'

const Header = () => {
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
      <StyledHeader component="header">
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
      </StyledHeader>
    </ClickAwayListener>
  )
}

export default Header
