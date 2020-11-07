import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withFormValues } from '../../../../.storybook/withFormValues'
import { FormField } from './'

export default storiesOf('Components | Atom/FormField', module)
  .addDecorator(withFormValues({ test: '' }))
  .add(
    'default',
    (props) => (
      <div style={{ background: 'black', width: '300px', padding: '10px' }}>
        <FormField name="test" label={text('Label', 'Test')} {...props} />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [FormField],
        text: `
          ~~~js
          <FormField label="Test" name="test" {..props} />
          ~~~
      `,
      },
    }
  )
