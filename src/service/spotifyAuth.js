import addSeconds from 'date-fns/addSeconds'
import formatISO from 'date-fns/formatISO'
import compareAsc from 'date-fns/compareAsc'

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token'

const auth = btoa(
  `${process.env.APP_SPOTIFY_CLIENT_ID}:${process.env.APP_SPOTIFY_CLIENT_SECRET}`
)

const options = {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${auth}`,
  }),
  body: 'grant_type=client_credentials',
}

export const isTokenValid = () => {
  const tokenExpiration = localStorage.getItem('spotify_token_expiration')

  if (!tokenExpiration) {
    return false
  }

  return compareAsc(new Date(tokenExpiration), new Date()) === 1
}

export const getToken = async () => {
  if (isTokenValid()) {
    return localStorage.getItem('spotify_token')
  }

  try {
    const response = await fetch(SPOTIFY_TOKEN_API, options)

    const { expires_in, access_token } = await response.json()

    const expireDate = addSeconds(new Date(), expires_in)

    localStorage.setItem('spotify_token_expiration', formatISO(expireDate))
    localStorage.setItem('spotify_token', access_token)

    return access_token
  } catch (e) {
    return e
  }
}
