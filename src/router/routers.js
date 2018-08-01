export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'Home',
      hideInMenu: true
    },
    component: () => import('@/view/home')
  }
]