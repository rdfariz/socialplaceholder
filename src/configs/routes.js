const routes = {
  HOME: () => '/',
  POSTS: () => `/posts`,
  POST_DETAIL: (id) => `/post/${id}`,
  USERS: () => `/users`,
  USER_DETAIL: (id) => `/users/${id}`,
  USER_ALBUMS: (id) => `/albums/${id}`,
  ALBUMS: () => `/albums`,
};

export default routes;
