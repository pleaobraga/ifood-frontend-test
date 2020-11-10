import { takeEvery, call, put, fork } from 'redux-saga/effects'
import {
  getPlaylistSuccess,
  getPlaylistError,
  types,
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

const playlistSagas = [fork(watchGetPlaylistRequest)]

export default playlistSagas
