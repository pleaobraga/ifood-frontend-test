import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from '.'

export default storiesOf('Components | Organism/Header', module).add(
  'default',
  () => <Header />,
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [Header],
      text: `
          ~~~js
          <Filter />
          ~~~
      `,
    },
  }
)
