import React from 'react'
import schemaValidator from './yupConfig'
import { forIn } from 'lodash'
import { FormField } from '../components/Molecule/FormField'
import { DateTimeField } from '../components/Molecule/DateTimeField'
import MenuItem from '@material-ui/core/MenuItem'
import format from 'date-fns/format'

export const toUnicodeStandarts = (format) => {
  const regex = /T/gm

  return format.replace(regex, (match) => `'${match}'`)
}

export const getType = (type) => {
  switch (type) {
    case 'STRING':
      return {
        yupType: 'string',
        message: 'Insira caracteres válidos',
        type: 'text',
      }

    case 'INTEGER':
    case 'FLOAT':
      return {
        yupType: 'number',
        message: 'Insira um número válido',
        inputType: 'number',
      }

    case 'DATE_TIME':
      return {
        yupType: 'date',
        message: 'Insira uma data válida',
        type: 'datetime-local',
      }

    default:
      return {
        yuptype: 'mixed',
        message: 'Insira caracteres válidos',
        type: 'text',
      }
  }
}

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

  const { primitiveType, entityType } = fieldData.validation

  const { type } = getType(entityType || primitiveType)

  if (type === 'datetime-local') {
    return (
      <DateTimeField
        name={fieldData.id}
        label={fieldData.name}
        size="small"
        format={toUnicodeStandarts(fieldData.validation.pattern)}
        {...formikProps}
      />
    )
  }

  return (
    <FormField
      name={fieldData.id}
      label={fieldData.name}
      size="small"
      type={type}
      {...formikProps}
    />
  )
}

export const createYupFieldSchema = (schema, config) => {
  const { id, validation } = config

  if (!validation) {
    schema[id] = schemaValidator.mixed()
    return schema
  }

  const { primitiveType, entityType, ...otherValidations } = validation

  const validationType = getType(entityType || primitiveType)

  let validator = schemaValidator[validationType.yupType]().typeError(
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
    if (field.validation?.entityType === 'DATE_TIME') {
      const date = field.validation.pattern
        ? format(new Date(), toUnicodeStandarts(field.validation.pattern))
        : new Date()

      initialValues[field.id] = date

      return initialValues
    }

    initialValues[field.id] = ''
    return initialValues
  }, {})
}
