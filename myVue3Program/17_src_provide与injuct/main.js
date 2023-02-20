// 引入的不是vue构造函数了，引入的是一个createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 也没有rander了
// 创建实例对象--app(类似于之间vue2中的vm),但是更轻了
createApp(App).mount('#app')

// const app = createApp(APP)
// app.mount('#app')
// console.log(app)
