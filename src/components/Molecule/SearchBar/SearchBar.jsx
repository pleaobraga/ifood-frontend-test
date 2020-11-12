/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormField } from '../FormField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onSearchBarChange, formikProps, placeholder, name }) => {
  useEffect(() => {
    const { values } = formikProps
    onSearchBarChange(values[name])
  }, [formikProps.values?.[name]])

  return (
    <FormField
      {...formikProps}
      name={name}
      placeholder={placeholder}
      inputPropsTF={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

SearchBar.propTypes = {
  onSearchBarChange: PropTypes.func,
  formikProps: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: 'Pesquisar',
  name: 'searchBar',
}

export default SearchBar
