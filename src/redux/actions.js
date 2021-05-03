import { action } from './namespace'
import { getDataBySlug, getPages } from '../api';

export const setPages = action('SET_PAGES')
export const setCurrentData = action('SET_CURRENT_DATA')
export const setIsLoading = action('IS_LOADING')
// export const setShouldLoad = action('SHOULD_LOAD')

export const loadPages = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return getPages()
        .then((pages) => dispatch(setPages(pages)))
        .finally(() => { dispatch(setIsLoading(false)) });
}

export const loadDataBySlug = ({ slug, type }) => (dispatch) => {
    dispatch(setIsLoading(true));
    return getDataBySlug({ slug, type })
        .then((data) => dispatch(setCurrentData(data)))
        .finally(() => dispatch(setIsLoading(false)))
}
