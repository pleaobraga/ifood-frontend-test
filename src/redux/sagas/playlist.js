import { takeLatest, call, put, fork } from 'redux-saga/effects'
import {
  types,
  getPlaylistSuccess,
  getPlaylistError,
} from '../actions/playlist'
import { getPlaylistAPI } from '../../api/playlist'
import { getToken } from '../../service/spotifyAuth'
// import { selectLocalFilter } from '../reducer/PlaylistReducer'
// import { useSelector } from 'react-redux'

function* getPlaylist({ filter }) {
  try {
    const token = yield getToken()
    const response = yield call(getPlaylistAPI, { token, filter })

    const playlists = response.data.playlists.items
    // const localFilter = useSelector(selectLocalFilter)

    // let newList

    // if (localFilter === '') {
    //   newList = playlists
    // } else {
    //   newList = playlists.filter(({ name }) =>
    //     name.toUpperCase().includes(action.filter.toUpperCase())
    //   )
    // }

    yield put(getPlaylistSuccess({ playlists, filter }))
  } catch (e) {
    yield put(
      getPlaylistError({
        error: 'An error occurred when trying to get the Playlist',
      })
    )
  }
}

function* watchGetPlaylistRequest() {
  yield takeLatest(types.GET_PLAYLIST_REQUEST, getPlaylist)
}

const playlistSagas = [fork(watchGetPlaylistRequest)]

export default playlistSagas
