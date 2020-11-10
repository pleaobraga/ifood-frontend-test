export const types = {
  GET_PLAYLIST_REQUEST: 'playlist/get_playlist_request',
  GET_PLAYLIST_SUCCESS: 'playlist/get_playlist_success',
  GET_PLAYLIST_ERROR: 'playlist/get_playlist_error',
}

export const getPlaylistRequest = () => ({
  type: types.GET_PLAYLIST_REQUEST,
})

export const getPlaylistSuccess = ({ playlists }) => ({
  type: types.GET_PLAYLIST_SUCCESS,
  playlists,
})

export const getPlaylistError = (error) => ({
  type: types.GET_PLAYLIST_ERROR,
  error,
})
