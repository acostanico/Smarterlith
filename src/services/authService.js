import {router} from '../index'

//TODO: Replace with Smarterlith API
const API_URL = 'https://private-8ad62-smarterlith.apiary-mock.com'
const LOGIN_URL = API_URL + '/user/login';
const SIGNUP_URL = API_URL + 'users/'

export default {

  //Initializacion setting Vue Resource for async calls
  init (context) {
    this.http = context.http;
  },

  user: {
    authenticated: false
  },

  login(creds, redirect) {
    this.http.post(LOGIN_URL, creds)
    .then((response) => {
      localStorage.setItem('auth_id', response.data.token);
      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('auth_id', data.auth_id)
      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('auth_id')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('auth_id')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  isAuthenticated(){
    return this.user.authenticated ? true : false;
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('auth_id')
    }
  }
}
