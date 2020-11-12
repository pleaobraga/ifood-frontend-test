import React from 'react'
import { storiesOf } from '@storybook/react'
import PlaylistsCard from './PlaylistsCard'

const card = {
  id: 'test',
  name: 'test',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  },
  images: [
    {
      url: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    },
  ],
}

const cardList = () => {
  const list = []

  for (let i = 0; i < 6; i++) {
    list.push(card)
  }

  return list
}

export default storiesOf('Components | Organism/CardList', module)
  .add(
    'default',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={cardList()}
          isFetching={false}
          error={null}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'empty',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard playlistsFiltered={[]} isFetching={false} error={null} />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'with error',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={[]}
          isFetching={false}
          error={{ error: 'error' }}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
  .add(
    'loading',
    () => (
      <div style={{ width: '900px', margin: '30px' }}>
        <PlaylistsCard
          playlistsFiltered={[]}
          isFetching={true}
          error={{ error: 'error' }}
        />
      </div>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [PlaylistsCard],
        text: `
          ~~~js
          <PlaylistsCard 
            playlistsFiltered={playlistsFiltered} 
            isFetching={isFetching}
            error={error}
          />
          ~~~
      `,
      },
    }
  )
