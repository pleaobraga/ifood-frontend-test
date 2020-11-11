import { types } from '../../actions/playlist'

const initialState = {
  playlists: [],
  isFetching: false,
  error: {},
  playlistsFiltered: [],
}

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYLIST_REQUEST:
      return { ...state, isFetching: true }

    case types.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
        playlistsFiltered: action.playlists,
        isFetching: false,
        errorContent: null,
      }

    case types.FILTER_PLAYLIST: {
      let newList

      if (action.filter === '') {
        newList = state.playlists
      } else {
        newList = state.playlists.filter(({ name }) =>
          name.toUpperCase().includes(action.filter.toUpperCase())
        )
      }

      return {
        ...state,
        playlistsFiltered: newList,
      }
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
