<template>
  <div class="main-container">
    <div class="login-header">
      <img class="header-logo" src="/assets/img/smarterlith-logo.png"></img>
      <span> Get smarter </span>
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

    font-size:100px;
    color:white;

    .header-logo{
      height:2em;
      margin:0 auto;
    }

  }

</style>
