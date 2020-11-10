import { types } from '../../actions/playlist'

const initialState = {
  playlists: [],
  isFetching: false,
  error: {},
}

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYLIST_REQUEST:
      return { ...state, isFetching: true }

    case types.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
        isFetching: false,
        errorContent: null,
      }

    case types.GET_PLAYLIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    default:
      return state
  }
}
