import Layout from '@/views/Layout'

const routes = [
	{
		path: '/',
		name: 'index',
		mate: {
			title: '首页',
			icon: 'chrome'
		},
		component: Layout,
		children: [{
			path: '/home',
			name: 'home',
			mate: {
				title: '主页',
				icon: 'chrome'
			},
			component: () => import('@/views/Home')
		}, {
			path: '/dashboard',
			name: 'dashboard',
			mate: {
				title: '仪表页',
				icon: 'chrome'
			},
			component: () => import('@/views/Dashboard')
		}]
	}
]

export default routes