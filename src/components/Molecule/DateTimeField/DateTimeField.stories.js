import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withFormValues } from '../../../../.storybook/withFormValues'
import MenuItem from '@material-ui/core/MenuItem'
import { DateTimeField } from '.'

const options = ['test1', 'test2']

export default storiesOf('Components | Molecule/FormField', module)
  .addDecorator(withFormValues({ test: '' }))
  .add(
    'Text',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <DateTimeField
          name="test"
          label={text('Label', 'Text field')}
          {...props}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [DateTimeField],
        text: `
          ~~~js
          <DateTimeField label="Test" name="test" {..props} />
          ~~~
      `,
      },
    }
  )
  .add(
    'Select',
    (props) => (
      <div style={{ background: '#303030', width: '300px', padding: '10px' }}>
        <DateTimeField
          name="test"
          label={text('Label', 'Select field')}
          select
          {...props}
        >
          {options.map((option, index) => (
            <MenuItem key={`${option}-${index}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </DateTimeField>
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [DateTimeField],
        text: `
          ~~~js
          <DateTimeField label="Test" name="test" select {..props} >
            <MenuItem value={option}>
              {name}
            </MenuItem>
          </DateTimeField>
          ~~~
      `,
      },
    }
  )
