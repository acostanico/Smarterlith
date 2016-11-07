<template>
    <div class="main-container">
        <!--Wrapper for mobile responsiveness-->
        <div class="login-container">

            <!--Logo and title container-->
            <div class="header">
                  <img class="logo" src="/assets/img/smarterlithlogo.svg"></img>
                  <p class="title"> Smarterlith </p>
            </div>

            <!--Login form-->
            <div class="auth_form">
                <input class="auth_form-input" placeholder="Username" v-model="authData.email" > </input>
                <input class="auth_form-input" type="password" placeholder="Password" v-model="authData.password"> </input>
                <button class="auth_form-button" @click="login()"> <b> Log in </b> </button>
                <p class="auth_form-label"> Not a member? <a href class="auth_form-link"> Sign up </a> now! </p>
            </div>

        </div>
    </div>
</template>

<script>

  import Auth from 'services/authService.js';

  var vm = {

    data: function(){
      return {
        authData : {
          email : "",
          password : ""
        }
      }
    },

    methods : {

      login : function(){
        Auth.login(this.authData, "/");
      }

    }
  }

  export default vm;

</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import '~bootstrap-sass/assets/stylesheets/_bootstrap';
  @import "globals.scss";

  //This pallette is unique for this section
  //Palletton color scheme ID: 2T61Tuullw0w0
  $color-main : white;
  $background-main: #025414;
  $background-sec : #E9EDEA;

  .main-container{
    height:100vh;
    padding: 5% 0% 5% 0%;
    text-align: center;
    background-color: $background-main;

    //Responsive base font sizes
    font-size:5rem;
    //Base size (landscape mode)
    @media screen and (orientation:landscape){
      font-size:2.5rem;
    }
    //Base size (larger devices)
    @include respond-to('md'){
      font-size:4rem;
    }
    @include respond-to('lg'){
      font-size:2.7rem;
    }

    //If mobile, center content vertically
    display: flex;
    justify-content:center;
    align-items: center;
    // For larger screens, don't center all the content!
    // (it will appear too low down large screen)
    @include respond-to('md'){
      align-items: flex-start;
    }
  }

  //Wrap content for mobile (in case screen is flipped)
  .login-container{
    @include respond-to('sm'){
      display: flex;
      justify-content:space-around;
      align-items: flex-start;
      flex-wrap:wrap;
    }
    @include respond-to('md'){
      display:block;
      padding: 0.5em 1em 1em 1em;
    }
  }

  .header{
    font-size:1.5em;
    color:$color-main;
    margin:0.6em 0.7em 1em 0.7em;
  }

  .logo{
    display:inline-block;
    margin: 0.3em 0.3em 0.1em 0.3em;
    height:4em;
  }

  .title{
    margin-bottom:0.05em;
  }

  //Auth menu
  .auth_form{
    display: inline-block;
    text-align: center;
    @include respond-to('md'){
      font-size:0.6em;
    }
  }

  .shadow-highlight{
    box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.12), 0 0.1em 0.2em rgba(0,0,0,0.24);
    transition: box-shadow 0.3s linear(.25,.8,.25,1);

    &:focus, &:hover{
      box-shadow: 0 0.4em 1em rgba(0,0,0,0.25), 0 0.5em 0.5em rgba(0,0,0,0.22);
    }
  }

  .auth_form-input{
    display:block;
    width: 16em;
    padding: 0.3em 0.2em 0.3em 0.5em;
    margin: 0.6em 1.2em 0.8em 1.2em;
    background-color: $color-main;
    border: none;
    outline-style:none;
    color:black;
    font-size : 1em;
    @extend .shadow-highlight;
  }

  .auth_form-button{
    display:block;
    padding: 0.3em 0.3em 0.3em 0.3em;
    margin: 1em 1.2em 0.8em 1.2em;
    width: 16em;
    background-color: $analogic2-s2;
    border: none;
    color:white;
    transition: background-color 0.1s linear;
    outline-style:none;
    &:focus, &:hover{
      background-color:$analogic1-s2;
    }
    @extend .shadow-highlight;
  }

  .auth_form-label{
    margin: 2em 1em 0.8em 1em;
    color:$color-main;
  }

  .auth_form-link{
    font-weight: bold;
    color: $analogic2-s2;
    transition: color 0.1s linear;
    &:focus, &:hover{
      text-decoration: none;
      color:$analogic1-s2;
    }
  }


</style>
