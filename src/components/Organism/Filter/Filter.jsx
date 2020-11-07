import React, { useState } from 'react'
import { Formik } from 'formik'
import { FilterButton } from '../../Atom/FilterButton'
import { FormField } from '../../Molecule/FormField'
import { AdvancedFilter } from '../AdvancedFilter'
import { StyledFilter, StyledForm, MainFilter } from './styles'

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

  const [showMoreFilters, setShowMoreFilters] = useState(false)

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
                  label="Nome da playlist"
                  {...formikProps}
                />
                <FilterButton onClick={toggleMoreFilters} />
              </MainFilter>

              {showMoreFilters && (
                <AdvancedFilter formikProps={formikProps} filters={filter} />
              )}
            </StyledForm>
          )
        }}
      </Formik>
    </StyledFilter>
  )
}

export default Filter
