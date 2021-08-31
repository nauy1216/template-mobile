import loadable from '@loadable/component'; // 按需加载

// 如果访问路径有二级目录，则需要配置这个值，如首页地址为'http://tianzhen.tech/blog/home'，则这里配置为'/blog'
export const basename = '';
export const routes = [
  {
    path: '/home',
    component: loadable(() => import('../pages/home')),
    name: 'Demo',
    title: 'Demo'
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
