// import 'virtual:windi.css'
// import { createApp, h } from 'vue-demi'
import Vue from 'vue'
import { install } from 'vue-demi'

install()
import App from './App.vue'

// const app = createApp({
// 	render: () => h(App),
// })
// // app.use(VueInteractive)
// app.mount('#app')

const app = new Vue({
	render: (h) => h(App),
})

app.$mount('#app')
