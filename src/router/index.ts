import loadable from '@loadable/component'; // 按需加载

export const basename = '';
export const routes = [
  {
    path: '/',
    component: loadable(() => import('../pages/login')),
    name: 'Login',
    title: '登录'
  },
  {
    path: '/Login',
    component: loadable(() => import('../pages/login')),
    name: 'Login',
    title: '登录'
  },
  // 404 Not Found
  {
    path: '*',
    exact: true,
    component: loadable(() => import('../pages/not-found')),
    name: '404',
    title: '404'
  }
];
