// var hello = require('./utils')
import Vue from 'vue'
import App from './App.vue'

import './style/common.scss';


new Vue({
    el: '#app',
    render: h => h(App),
})