import React from 'react'
import { Formik } from 'formik'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { createFormField } from '../../../helpers/utils'
import { FormField } from '../../Molecule/FormField'
import { StyledFilter, StyledForm } from './styles'

const Filter = () => {
  const filter = [
    {
      id: 'locale',
      name: 'Locale',
      values: [
        {
          value: 'en_AU',
          name: 'en_AU',
        },
        {
          value: 'de_DE',
          name: 'de_DE ',
        },
        {
          value: 'pt_BR',
          name: 'pt_BR',
        },
        {
          value: 'fr_FR',
          name: 'fr_FR',
        },
        {
          value: 'en_US',
          name: 'en_US',
        },
        {
          value: 'es_AR',
          name: 'es_AR',
        },
      ],
    },
    {
      id: 'country',
      name: 'País',
      values: [
        {
          value: 'AU',
          name: 'Australia',
        },
        {
          value: 'DE',
          name: 'Alemanhã',
        },
        {
          value: 'BR',
          name: 'Brasil',
        },
        {
          value: 'PT',
          name: 'Portugal',
        },
        {
          value: 'en_US',
          name: 'EUA',
        },
        {
          value: 'RU',
          name: 'Rússia',
        },
      ],
    },
    {
      id: 'timestamp',
      name: 'Data e Horário',
      validation: {
        primitiveType: 'STRING',
        entityType: 'DATE_TIME',
        pattern: 'yyyy-MM-ddTHH:mm:ss',
      },
    },
    {
      id: 'limit',
      name: 'Quantidade',
      validation: {
        primitiveType: 'INTEGER',
        min: 1,
        max: 50,
      },
    },
    {
      id: 'offset',
      name: 'Página',
      validation: {
        primitiveType: 'INTEGER',
      },
    },
  ]

  return (
    <StyledFilter component="section">
      <Formik initialValues={{}} validationSchema={{}}>
        {(formikProps) => {
          return (
            <StyledForm component="form">
              <FormField
                name="playListName"
                label="Nome da playlist"
                {...formikProps}
              />

              <Grid container spacing={3} className="api-filters" wrap="wrap">
                {filter.map((f) => (
                  <Grid item md={3} sm={4} xs={12} key={`grid-${f.id}`}>
                    {createFormField({ fieldData: f, formikProps })}
                  </Grid>
                ))}
              </Grid>
            </StyledForm>
          )
        }}
      </Formik>
    </StyledFilter>
  )
}

export default Filter
