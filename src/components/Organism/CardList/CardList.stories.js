import React from 'react'
import { storiesOf } from '@storybook/react'
import { CardList } from '.'

const card = {
  link: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  imgSrc: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
  name: 'It Hits Sweden',
}

const cardList = () => {
  const list = []

  for (let i = 0; i < 8; i++) {
    list.push(card)
  }

  return list
}

export default storiesOf('Components | Organism/CardList', module).add(
  'default',
  () => (
    <div style={{ width: '900px', margin: '30px' }}>
      <CardList list={cardList()} />
    </div>
  ),
  {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [CardList],
      text: `
          ~~~js
          <CardList list={list} />
          ~~~
      `,
    },
  }
)
