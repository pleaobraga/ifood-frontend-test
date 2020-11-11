/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { FormField } from '../FormField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onSearchBarChange, formikProps, placeholder, name }) => {
  const onFilterBarChange = (event) => {
    onSearchBarChange(event.target.value)
    formikProps.handleChange(event)
  }

  return (
    <FormField
      {...formikProps}
      name={name}
      placeholder={placeholder}
      handleChange={onFilterBarChange}
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
