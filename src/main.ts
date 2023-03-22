/*
 * @Author: lfan
 * @Date: 2023-03-21 14:39:36
 * @Description: file content
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './route/index'
import 'lib-flexible/flexible'
import 'vant/lib/index.css';
import vant from 'vant'


const app = createApp(App)
app.use(route)
app.use(vant)
app.mount('#app')
