// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCHd0XoSi_W7txQ0sswMXR76ykBmw94My8',
  authDomain: 'f01-vue-test.firebaseapp.com',
  databaseURL: 'https://f01-vue-test.firebaseio.com',
  projectId: 'f01-vue-test',
  storageBucket: 'f01-vue-test.appspot.com',
  messagingSenderId: '876352352586'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
