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

// var exampleData = {
//     message: 'Hello World!'
// }

// 创建一个 Vue 实例或 "ViewModel"
// 它连接 View 与 Model
// new Vue({
//     el: '#app1',
//     data: exampleData
// })

// var vm = new Vue({
//     el: '#app2',
//     data: {
//         yes: true,
//         no: true,
//         age: 28,
//         name: 'keepfool'
//     }
// })

var vm = new Vue({
        el: '#app3',
        data: {
            newPerson: {
                name: '',
                age: 0,
                sex: 'Male'
            },
            people: [{
                name: 'Jack',
                age: 30,
                sex: 'Male'
            }, {
                name: 'Bill',
                age: 26,
                sex: 'Male'
            }, {
                name: 'Tracy',
                age: 22,
                sex: 'Female'
            }, {
                name: 'Chris',
                age: 36,
                sex: 'Male'
            }]
        },
        methods:{
            createPerson: function(){
                this.people.push(this.newPerson);
                // 添加完newPerson对象后，重置newPerson对象
                this.newPerson = {name: '', age: 0, sex: 'Male'}
            },
            deletePerson: function(index){
                // 删一个数组元素
                this.people.splice(index,1);
            }
        }
    })
