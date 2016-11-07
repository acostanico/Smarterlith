
//Require Vue files
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource');

//Set up vue router and resource
Vue.use(VueRouter);
Vue.use(VueResource);

//Set auth header
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// create App instance
var App = Vue.extend({});

//create Router instance
export var router = new VueRouter();

// authentication service
import Auth from 'services/authService.js';

//Initialization of services which need it
Auth.init(Vue);

// Require view files for routing
// (Add required components here)
import home from  'components/Home.vue';
import login from 'components/views/login.vue';
import surveys from 'components/views/surveys.vue';


//Router config (Add routes here)
router.map({
    '/': {
      component: home,  //User's dashboard should be here
      subRoutes : {
      },
      auth:true
    },
    'login' : {
      component:login
    }

});

//Add check for authenticated user on pages that require it
router.beforeEach(function (transition) {
    if (transition.to.auth && !Auth.isAuthenticated()) {
        // if route requires auth and user isn't authenticated
        transition.redirect('/login')
    } else {
      transition.next()
    }
})

//Start router on index page
router.start(App, '#app')
