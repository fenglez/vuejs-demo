import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'

Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

var exampleData = {
    message: 'Hello World!'
}

// 创建一个 Vue 实例或 "ViewModel"
// 它连接 View 与 Model
new Vue({
    el: '#app1',
    data: exampleData
})

var vm = new Vue({
    el: '#app2',
    data: {
        yes: true,
        no: true,
        age: 28,
        name: 'keepfool'
    }
})
