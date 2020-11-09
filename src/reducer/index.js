import { combineReducers } from 'redux'
import content from './ContentReducer'
import { filterReducer } from './FilterReducer'

export default combineReducers({ content, filter: filterReducer })
