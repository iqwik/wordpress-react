import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
    setCurrentData,
    setIsLoading,
    setPages,
} from './actions'

const currentData = handleActions(
    {
        [setCurrentData]: (state, action) => ({ ...action.payload?.[0] || action.payload }),
    },
    null,
)

const isLoading = handleActions(
    {
        [setIsLoading]: (state, action) => action.payload,
    },
    false,
)

const pages = handleActions(
    {
        [setPages]: (state, action) => [...action.payload],
    },
    null,
)

export default combineReducers({
    currentData,
    isLoading,
    pages,
})
