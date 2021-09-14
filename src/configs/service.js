const BASE_URL = 'https://jsonplaceholder.typicode.com';

const services = {
  // Post
  GET_POST_LIST: `${BASE_URL}/posts`,
  GET_POST_DETAIL: (id) => `${BASE_URL}/posts/${id}`,
  GET_POST_COMMENTS: `${BASE_URL}/comments`,
  
  // User
  GET_USER_LIST: `${BASE_URL}/users`,
  GET_USER_DETAIL: (id) => `${BASE_URL}/users/${id}`,
  GET_USER_POSTS: (id) => `${BASE_URL}/users/${id}/posts`,
  GET_USER_ALBUMS: (id) => `${BASE_URL}/users/${id}/albums`,

  // Albums
  GET_ALBUMS_LIST: `${BASE_URL}/albums`,
  GET_ALBUMS_INFO: (id) => `${BASE_URL}/albums/${id}`,
  GET_ALBUMS_PHOTOS: (id) => `${BASE_URL}/albums/${id}/photos`,
};

export default services;
