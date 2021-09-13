const BASE_URL = 'https://jsonplaceholder.typicode.com';

const services = {
  GET_POST_LIST: `${BASE_URL}/posts`,
  GET_POST_DETAIL: (id) => `${BASE_URL}/posts/${id}`,
};

export default services;
