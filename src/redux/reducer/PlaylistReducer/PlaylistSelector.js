import { isEmpty } from 'lodash'

export const selectPlaylists = (state) => state.playlist
export const selectAllPlaylists = (state) => state.playlist.playlists
export const selectAllFilteredPlaylists = (state) =>
  state.playlist.playlistsFiltered
export const selectIsFetchingPlaylists = (state) => state.playlist.isFetching
export const selectHasErrorPlaylists = (state) => !isEmpty(state.playlist.error)
