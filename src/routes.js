
//Require Vue files
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource');

//Set up vue router and resource
Vue.use(VueRouter);
Vue.use(VueResource);
// create App instance
var App = Vue.extend({});
//create Router instance
var router = new VueRouter();

// Require view files for routing
// (Add required components here)
var main = require('components/Home.vue');
var login = require('components/views/login.vue');

//Router config (Add routes here)
router.map({
    '/': {
        component: login
    }
})

//Start router on index page
router.start(App, '#app')
