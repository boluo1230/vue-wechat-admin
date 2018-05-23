import Vue from 'vue'
import Router from 'vue-router'
import echarts from 'echarts'

import Login from '../components/home/login'
import Home from '../components/home/home'
import Echarts from '../components/home/echarts'

import EventFinance from '../components/event/event-finance'
import EventShop from '../components/event/event-shop'
import FocusIndex from '../components/focus/focus-index'
import FocusLogin from '../components/focus/focus-login'
import SaleList from '../components/sale/sale-list'
import SystemIndex from '../components/system/index'
import UserList from '../components/user/user-list'

import ViewEditor from '../components/views/editor'
import ViewEcharts from '../components/views/echarts'
import ViewForm from '../components/views/form'

Vue.use(Router)

Vue.prototype.$echarts = echarts

const routes = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/',
        component: Home,
        hidden: true
    },{
        path: '/',
        component: Home,
        name: '数据监测',
        hidden: true,
        children: [
            { path: '/echarts', component: Echarts, name: '用户点击数据' },
        ]
    }, {
        path: '/',
        component: Home,
        name: 'Banner管理',
        iconCls: 'el-icon-menu',
        hidden: false,
        children: [
            { path: '/focus/index', component: FocusLogin, name: '登录Banner' },
            { path: '/focus/login', component: FocusIndex, name: '首页Banner' }
        ]
    }, {
        path: '/',
        component: Home,
        name: '活动管理',
        iconCls: 'el-icon-menu',
        hidden: false,
        children: [
            { path: '/event/shop', component: EventShop, name: '店内活动' },
            { path: '/event/finance', component: EventFinance, name: '金融方案' }
        ]
    }, {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-menu',
        hidden: false,
        children: [
            { path: '/user', component: UserList, name: '用户列表' }
        ]
    }, {
        path: '/',
        component: Home,
        name: '员工管理',
        iconCls: 'el-icon-menu',
        hidden: false,
        children: [
            { path: '/sale/list', component: SaleList, name: '销售顾问列表' }
        ]
    }, {
        path: '/',
        component: Home,
        name: '组件',
        iconCls: 'el-icon-menu',
        hidden: false,
        children: [
            { path: '/view/editor', component: ViewEditor, name: '富文本编辑器'},
            { path: '/view/echarts', component: ViewEcharts, name: '数据可视化' },
            { path: '/view/form', component: ViewForm, name: '表单验证' }
        ]
    }
]

const router = new Router({ routes })

export default router