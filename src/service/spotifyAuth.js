const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'

export const spotifyURLAuth = `${SPOTIFY_AUTH_URL}?response_type=code&client_id=${process.env.APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.APP_SPOTIFY_REDIRECT_URI}`

export const saveSpotifyToken = (token) => {
  localStorage.setItem('spotify_token', token)
}

export const getTokenSpotifyToken = () => {
  const token = localStorage.getItem('spotify_token')
  return token || ''
}

export const isLoggedIn = () => {
  return getTokenSpotifyToken !== ''
}
