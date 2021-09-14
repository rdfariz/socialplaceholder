const routes = {
  HOME: () => '/',
  PROFILE: () => '/profile',
  POSTS: () => `/posts`,
  POST_DETAIL: (id) => `/post/${id}`,
  USERS: () => `/users`,
  USERS_DETAIL: (id) => `/users/${id}`,
};

export default routes;
