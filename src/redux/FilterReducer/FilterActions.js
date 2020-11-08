import {
  GET_FILTER,
  GET_FILTER_SUCCESS,
  GET_FILTER_ERROR,
} from './FilterActionsType'
import { getFilterAPI } from '../../api/Filters'

export const getFilterStart = () => ({
  type: GET_FILTER,
})

export const getFilterSuccess = ({ filters }) => ({
  type: GET_FILTER_SUCCESS,
  filters,
})

export const getFilterError = (error) => ({
  type: GET_FILTER_ERROR,
  error,
})

export const getFilterAction = () => (dispatch) => {
  dispatch(getFilterStart())

  return getFilterAPI()
    .then((response) => {
      dispatch(getFilterSuccess(response.data))
      return response.data
    })
    .catch((error) => getFilterError(error))
}
