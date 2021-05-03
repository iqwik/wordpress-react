import apiFetch from '@wordpress/api-fetch';

export const getPages = () => apiFetch({ path: '/wp/v2/pages' })
    .then((data) => data);

export const getPosts = () => apiFetch({ path: '/wp/v2/posts' })
    .then((posts) => posts);

export const getDataById = ({ id, type }) => apiFetch({ path: `/wp/v2/${type}s/${id}` })
    .then((data) => data);

export const getDataBySlug = ({ slug, type }) => apiFetch({ path: `/wp/v2/${type}s/?slug=${slug}` })
    .then((data) => data);

export default {
    getPages,
    getPosts,
    getDataById,
    getDataBySlug,
}
