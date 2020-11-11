import React from 'react'
import { storiesOf } from '@storybook/react'
import { Filter } from '.'

export default storiesOf('Components | Organism/Filter', module).add(
  'default',
  () => <Filter />,
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Filter],
      text: `
          ~~~js
          <Filter />
          ~~~
      `,
    },
  }
)
