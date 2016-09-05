<template>
    <navbar></navbar>
    <!--<surveys></surveys>-->
</template>

<script>

  import navbar from 'components/commons/navbar.vue';
  import surveys from 'components/views/surveys.vue';

  var vm = {
    components : {
      navbar : navbar,
      surveys : surveys
    },
    created : function(){
      var vm = this;
    }
  }

  export default vm;

</script>

<!--

  Add "scoped" attribute to limit CSS to this component only.
  Add "lang=scss" to enable SASS preprocessing and syntax highlighting.
-->

<style lang="scss">

  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import '~bootstrap-sass/assets/stylesheets/_bootstrap';
  @import "colors.scss";
  @import "fonts.scss";

  @font-face {
      font-family: Montserrat;
      src: url('/Montserrat-Regular.otf');
  }

  @font-face {
      font-family: Circular;
      src: url('../assets/fonts/Circular.ttf');
  }

  //Main SPa body definition
  body{
    margin:0px 0px 0px 0px;
    padding:0px 0px 0px 0px;
  }

  #app {
    font-family: Montserrat, Verdana, sans-serif;
    text-align: center;
    padding-top: 65px;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right:0;
  }


</style>
