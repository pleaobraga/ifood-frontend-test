import React from 'react'
import { storiesOf } from '@storybook/react'
import { SearchBar } from '.'

export default storiesOf('Components | Molecule/SearchBar', module).add(
  'default',
  () => <SearchBar />,
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [SearchBar],
      text: `
          ~~~js
          <Filter />
          ~~~
      `,
    },
  }
)
