<template>
  <div id="app">
    <img src="/assets/img/smarterlith-logo.png"></img>
    <h1> Welcome to Smarterlith </h1>
  </div>
</template>

<script>
  var vm = {
    data: function(){
        return{
          addresses : []
        }
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

  #app {

    font-family: Verdana, sans-serif;
    text-align: center;


  }
</style>
