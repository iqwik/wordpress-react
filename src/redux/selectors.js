import { getState } from './namespace'

export const getCurrentData = (state) => getState(state).currentData
export const getIsLoading = (state) => getState(state).isLoading
export const getPages = (state) => getState(state).pages
// export const getShouldLoad = (state) => getState(state).shouldLoad
