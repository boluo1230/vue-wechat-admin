
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import App from './components/App'

Vue.use(ElementUI)
Vue.use(VueRouter)

axios.post('/userinfo', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

/**
 * @author 张闯
 * @param fileName 导出excel文件的名字
 * @param sheetFilter 字段名称
 * @param sheetHeader 首行汉字
 * @param excelContent 导出excel文件的内容
 */
Vue.prototype.jsonToExcel = function (fileName, sheetFilter, sheetHeader, excelContent) {
    require.ensure([], () => {
        let { export_json_to_excel } = require('./vendor/Export2Excel')
        let exportContent = this.formatJson(sheetFilter, excelContent)
        export_json_to_excel(sheetHeader, exportContent, fileName)
    })
}

Vue.prototype.formatJson = function (sheetFilter, jsonData) {
    return jsonData.map(v => sheetFilter.map(j => v[j]))
}

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');