import * as yup from 'yup'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

yup.setLocale({
  number: {
    min: 'Número Deve ser maior que ${min}',
    max: 'Número Deve ser menor que ${max}',
  },
})

yup.addMethod(yup.date, 'pattern', function (formats) {
  return yup
    .string()
    .test('pattern', `Utilize o padrão ${formats}`, function (value) {
      if (!value || value.length === 0) return true

      return dayjs(value, formats).isValid()
    })
})

const schemaValidator = Object.assign({}, yup)

export default schemaValidator
