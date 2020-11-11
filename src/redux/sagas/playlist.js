import { takeEvery, call, put, fork } from 'redux-saga/effects'
import {
  types,
  getPlaylistSuccess,
  getPlaylistError,
  postFilterLocalPlaylistSuccess,
  postFilterLocalPlaylistError,
} from '../actions/playlist'
import { getPlaylistAPI } from '../../api/playlist'
import { getToken } from '../../service/spotifyAuth'

function* getPlaylist() {
  try {
    const token = yield getToken()
    const response = yield call(getPlaylistAPI, { token })
    yield put(getPlaylistSuccess({ playlists: response.data.playlists.items }))
  } catch (e) {
    yield put(
      getPlaylistError({
        error: 'An error occurred when trying to get the Playlist',
      })
    )
  }
}

function* watchGetPlaylistRequest() {
  yield takeEvery(types.GET_PLAYLIST_REQUEST, getPlaylist)
}

// function* filterLocalPlaylist(filter) {
//   try {

//     yield put(
//       postFilterLocalPlaylistSuccess({
//         playlists:
//       })
//     )
//   } catch (e) {
//     yield put(
//       getPlaylistError({
//         error: 'An error occurred when trying to get the Playlist',
//       })
//     )
//   }
// }

// function* watchFilterLocalPlaylist() {
//   yield takeEvery(types.FILTER_LOCAL_PLAYLIST, filterLocalPlaylist)
// }

const playlistSagas = [
  fork(watchGetPlaylistRequest),
  // fork(watchFilterLocalPlaylist),
]

export default playlistSagas
