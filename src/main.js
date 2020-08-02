import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui' // 追記
import locale from 'element-ui/lib/locale/lang/ja' // 追記
import 'element-ui/lib/theme-chalk/index.css' // 追記

import firebase from 'firebase' //追記

Vue.config.productionTip = false
Vue.use(ElementUI, {locale}) // 追記

var firebaseConfig = {
  apiKey: "AIzaSyCQkv5fs7aQx2lt6ZzFKjH4RTswFmNi0Mc",
  authDomain: "gemini-de0b0.firebaseapp.com",
  databaseURL: "https://gemini-de0b0.firebaseio.com",
  projectId: "gemini-de0b0",
  storageBucket: "gemini-de0b0.appspot.com",
  messagingSenderId: "284859959372",
  appId: "1:284859959372:web:2e24450d289cf2433bcce9"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
