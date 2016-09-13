<template>
  <div class="main-container">
    <div class="login-header">
        <img class="login-header-logo" src="/assets/img/smarterlith-logo.png"></img>
        <div>
        <p class="header"> Get smarter. </p>
        <p class="subheader"> Test your coding skills with our surveys </p>
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


  .main-container{
    height:100vh;
    padding: 5% 0px 5% 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
        url('../../assets/img/code.jpg');
  }

  .login-header{
    font-size:4rem;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    margin: 10px 10px 10px 10px;
    @include respond-to('sm'){
      font-size:8rem;
    }
    @include respond-to('lg'){
      font-size:10rem;
    }

    .login-header-logo{
      height:2.3em;
      margin: 0.3em 0.5em 0.3em 0.5em;
    }

  }

  .header{
    margin-bottom:0.05em;
  }

  .subheader{
    color:$primary-s3;
    font-size:0.3em;
  }

</style>
