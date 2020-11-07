import React from 'react'
import { FormField } from '../components/Molecule/FormField'
import MenuItem from '@material-ui/core/MenuItem'

export const createFormField = ({
  fieldData = null,
  formikProps,
  ...otherProps
}) => {
  if (!fieldData) return

  if (fieldData.values) {
    return (
      <FormField
        {...formikProps}
        name={fieldData.id}
        label={fieldData.name}
        select={true}
        {...otherProps}
      >
        {fieldData.values.map((value) => (
          <MenuItem key={value.value} value={value.value}>
            {value.name}
          </MenuItem>
        ))}
      </FormField>
    )
  }

  return (
    <FormField
      {...formikProps}
      name={fieldData.id}
      label={fieldData.name}
      {...otherProps}
    />
  )
}
