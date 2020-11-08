import {
  GET_FILTER,
  GET_FILTER_SUCCESS,
  GET_FILTER_ERROR,
} from './FilterActionsType'

const initialState = {
  filters: [],
  isFetching: false,
  error: {},
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTER:
      return { ...state, isFetching: true }

    case GET_FILTER_SUCCESS:
      return {
        ...state,
        filters: action.filters,
        isFetching: false,
        errorContent: null,
      }

    case GET_FILTER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    default:
      return state
  }
}
