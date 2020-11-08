import React from 'react'
import * as yup from 'yup'
import { forIn } from 'lodash'
import { FormField } from '../components/Molecule/FormField'
import MenuItem from '@material-ui/core/MenuItem'

export const createFormField = ({ fieldData = null, formikProps }) => {
  if (!fieldData) return

  if (fieldData.values) {
    return (
      <FormField
        {...formikProps}
        name={fieldData.id}
        label={fieldData.name}
        select={true}
        size="small"
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
      size="small"
    />
  )
}

export const getYupType = (type) => {
  switch (type) {
    case 'STRING':
      return 'string'

    case 'INTEGER':
    case 'FLOAT':
      return 'number'

    case 'DATE_TIME':
      return 'date'

    case 'BOOLEAN':
      return 'boolean'

    default:
      return 'mixed'
  }
}

export const createYupFieldSchema = (schema, config) => {
  const { id, validation } = config

  if (!validation) {
    return (schema[id] = yup.mixed())
  }

  const { primitiveType, entityType, ...otherValidations } = validation

  const validationType = getYupType(entityType || primitiveType)

  let validator = yup[validationType]()

  forIn(otherValidations, (value, key) => {
    if (!validator[key]) {
      return
    }

    validator = validator[key](value)
  })

  schema[id] = validator
  return schema
}

export const createYupSchema = (fields) => {
  const fieldsSchema = fields.reduce(createYupFieldSchema, {})

  return yup.object().shape(fieldsSchema)
}
