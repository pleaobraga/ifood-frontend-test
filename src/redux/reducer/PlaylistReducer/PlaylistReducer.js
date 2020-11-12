import { types } from '../../actions/playlist'
import { isNull } from 'lodash'

const initialState = {
  playlists: [],
  isFetching: false,
  error: {},
  playlistsFiltered: [],
  localFilter: '',
  apiFilter: '',
}

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYLIST_REQUEST:
      return { ...state, isFetching: true }

    case types.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
        apiFilter: action.filter,
        isFetching: false,
        error: null,
      }

    case types.GET_PLAYLIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    case types.FILTER_PLAYLIST_SUCCESS: {
      const localFilter = isNull(action.filter)
        ? state.localFilter
        : action.filter

      return {
        ...state,
        playlistsFiltered: action.filteredPlaylists,
        localFilter,
      }
    }

    default:
      return state
  }
}
