import axios from 'axios'

const BASE_SPOTIFY_API_URL =
  'https://api.spotify.com/v1/browse/featured-playlists'

export const getPlaylistAPI = ({ filter = '', token }) =>
  axios.get(`${BASE_SPOTIFY_API_URL}${filter}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

// --- auth ---

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token'

export const getTokenAPI = async (options) => {
  try {
    const response = await fetch(SPOTIFY_TOKEN_API, options)
    const resp = await response.json()
    return resp
  } catch (e) {
    return e
  }
}
