import * as yup from 'yup'
import isMatch from 'date-fns/isMatch'
import { toUnicodeStandarts } from '../helpers/utils'

yup.setLocale({
  number: {
    min: 'Número Deve ser maior que ${min}',
    max: 'Número Deve ser menor que ${max}',
  },
})

yup.addMethod(yup.date, 'pattern', function (format) {
  const unicodeFormat = toUnicodeStandarts(format)

  return yup
    .string()
    .test('pattern', `Utilize o padrão ${format}`, function (value) {
      if (!value || value.length === 0) return true

      return isMatch(value, unicodeFormat)
    })
})

const schemaValidator = Object.assign({}, yup)

export default schemaValidator
