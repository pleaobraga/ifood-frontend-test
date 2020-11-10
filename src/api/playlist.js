import axios from 'axios'

const baseURL = 'https://api.spotify.com/v1/browse/featured-playlists'

export const getPlaylistAPI = ({ filter = '', token }) =>
  axios.get(`${baseURL}${filter}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
