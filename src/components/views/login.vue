<template>
  <div class="main-container">
    <div class="login-container">
      <div class="login-header">
          <img class="login-header-logo" src="/assets/img/smarterlithlogo.svg"></img>
          <p class="header"> Smarterlith </p>
      </div>
      <div class="auth">
        <input class="input-transparent" placeholder="Username"> </input>
        <input class="input-transparent" type="password" placeholder="Password"> </input>
        <button class="btn-primary-transparent login-button"> <b> Log in </b> </button>
        <p class="signup-label"> Not a member? <a href> Sign up </a> now! </p>
      </div>
    </div>
  </div>
</template>

<script>

  var vm = {
    created : function(){
      var vm = this;
    }
  }

  export default vm;

</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import '~bootstrap-sass/assets/stylesheets/_bootstrap';
  @import "globals.scss";

  $color-main : #FF0056;
  $color-main-light : #FF699B;
  $gray-ligth : #FDFDFD;
  $gray-dark : #363636;

    .main-container{

      height:100vh;
      padding: 5% 0% 5% 0%;
      text-align: center;
      background-image: linear-gradient(rgba(15,20,15, 0.7), rgba(15,20,15, 0.9)),
          url('../../assets/img/code.jpg');
      //Fill screen
      background-size: 100% 100%;
      //Responsive base font sizes
      font-size:1.8rem;

      @include respond-to('sm'){
        font-size:2rem;
      }
      @include respond-to('md'){
        font-size:3rem;
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

      //Wrap content for mobile (in case screen is flipped)
      .login-container{
        @include respond-to('xs'){
          display: flex;
          justify-content:space-around;
          align-items: flex-start;
          flex-wrap:wrap;
        }
      }

      .login-header{
        font-size:1.5em;
        color:$color-main;
        margin:0.6em 0.7em 1em 0.7em;

        .login-header-logo{
          display:inline-block;
          margin: 0.3em 0.3em 0.1em 0.3em;
          height:4em;
        }

      }

      //Auth menu
      .auth{
        display: inline-block;
        text-align: center;
        @include respond-to('md'){
          font-size:0.6em;
        }

        .input-transparent{
          display:block;
          width: 16em;
          padding: 0.3em 0.2em 0.3em 0.5em;
          margin: 1em auto 0.8em 1.2em;
          background-color: $gray-dark;
          border-style:solid;
          border-width: 0.15em;
          border-color:$gray-dark;
          color:$gray-ligth;
          font-size : 1em;
        }
      }

      .header{
        margin-bottom:0.05em;
      }


      .login-button{
        display:block;
        padding: 0.3em 0.3em 0.3em 0.3em;
        margin: 1em auto 0.8em 1.2em;
        width: 16em;
        background-color: $color-main;
        border: none;
        color:black;
        transition: background-color 0.1s linear;

        &:focus, &:hover{
          background-color:$color-main-light;
        }
      }

      .signup-label{
        margin: 2em auto 0.8em 1em;
        color:white;

        a{
          font-weight: bold;
          color: $color-main;
          transition: color 0.1s linear;
          &:focus, &:hover{
            text-decoration: none;
            color:$color-main-light;
          }
        }
      }

  }

</style>
