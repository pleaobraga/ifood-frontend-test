import React from 'react'
import schemaValidator from './yupConfig'
import { forIn } from 'lodash'
import { FormField } from '../components/Molecule/FormField'
import MenuItem from '@material-ui/core/MenuItem'

export const createFormField = ({ fieldData = null, formikProps }) => {
  if (!fieldData) return

  if (fieldData.values) {
    return (
      <FormField
        name={fieldData.id}
        label={fieldData.name}
        select={true}
        size="small"
        {...formikProps}
      >
        <MenuItem value={''} />
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
      name={fieldData.id}
      label={fieldData.name}
      size="small"
      {...formikProps}
    />
  )
}

export const getYupType = (type) => {
  switch (type) {
    case 'STRING':
      return { type: 'string', message: 'Insira caracteres válidos' }

    case 'INTEGER':
    case 'FLOAT':
      return { type: 'number', message: 'Insira um número válido' }

    case 'DATE_TIME':
      return { type: 'date', message: 'Insira uma data válida' }

    default:
      return { type: 'mixed', message: 'Insira caracteres válidos' }
  }
}

export const createYupFieldSchema = (schema, config) => {
  const { id, validation } = config

  if (!validation) {
    schema[id] = schemaValidator.mixed()
    return schema
  }

  const { primitiveType, entityType, ...otherValidations } = validation

  const validationType = getYupType(entityType || primitiveType)

  let validator = schemaValidator[validationType.type]().typeError(
    validationType.message
  )

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

  return schemaValidator.object().shape(fieldsSchema)
}

export const createInitialValues = (fields) => {
  return fields.reduce((initialValues, field) => {
    initialValues[field.id] = ''
    return initialValues
  }, {})
}
