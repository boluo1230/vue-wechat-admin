import Layout from '@/views/Layout'

const routes = [
	{
		path: '/department',
		name: 'department',
		mate: {
			title: '通讯录',
			icon: 'folder',
			key: 'department'
		},
		component: Layout,
		children: [{
			path: '/department/index',
			name: 'department_index',
			mate: {
				title: '组织架构',
				icon: 'solution',
				key: 'department_index'
			},
			component: () => import('@/views/Department/index')
		}, {
			path: '/department/tag',
			name: 'department_tag',
			mate: {
				title: '标签',
				icon: 'tag',
				key: 'department_tag'
			},
			component: () => import('@/views/Tag/index')
		}]
	}
]

export default routes