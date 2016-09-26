<template>
    <!-- Fixed navbar -->
    <nav id="smarterlith-navbar" class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand title" class="title" href="#">
            <img src="/assets/img/smarterlithlogo.svg" class="logo"></img>
            <span>Smarterlith</span>
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>

  var vm = {
    created : function(){
      console.log("Loaded navbar");
    }
  }

  export default vm;

</script>

<style lang="scss">

  @import "globals.scss";


  #smarterlith-navbar{

    color:white;
    height:65px;
    margin-bottom:0px;

    @include prefix((
      box-shadow: 0px 2px 2px 0px rgba(50, 50, 50, 0.19)
    ),webkit moz);

    background-color:$primary-s3;
    border:none;
    text-align:left;

    .container{
      margin-left:0px;
    }

    .logo{
      width:46px;
      height:53px;
      margin-right: 5px;
      display:inline;
    }

    .title{
      margin:0px 0px 0px 0px;
      padding-top:5px;
      padding-bottom:5px;
      color: white;
      font-size:28px;
      font-weight:600;
    }

    //Custom styling for bootstrap navbar
    .active a{
          color:white;
          font-weight: bold;
          background-color: $primary-s1;
    }

    .navbar-collapse.collapse{
      border:none;
    }

    button{
      color:white;
      border-color:white;
      margin-top:14px;

      .icon-bar{
        background-color:white;
      }

      &:hover{
        background-color: $primary-s1;
        border-color:$primary-s3;

        .icon-bar{
          background-color:$primary-s4;
        }
      }
    }


  }
</style>
