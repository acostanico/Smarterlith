<template>
  <div class="index-container">
    <div class="info-header">
      <h1> Get smarter. </h1>
      <h3> Test your coding skills with our surveys </h3>
    </div>
    <div class="survey-cards-container">
      <div class="survey-card"> je </div>
      <div class="survey-card"> je </div>
      <div class="survey-card"> je </div>
      <div class="survey-card"> je </div>
      <div class="survey-card"> je </div>
      <div class="survey-card"> jedddd </div>
      <div class="survey-card"> je </div>
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

  .index-container{
      color:white;
      background-color:$neutral-dark-s2;
      padding:10px 20px 10px 20px;
      height:100%;
  }

  .info-header{
    margin-bottom:2em;
    text-align:center;
    border:none;

    h1{
      font-size:60px;
      font-weight:600;
      letter-spacing: 0.035em;
    }

    h3{
      font-size: 34px;
      font-weight: 500;
      color: $primary-s3;
    }
  }

  .survey-cards-container{
    display:flex;
    justify-content :center;
    align-items:center;
    flex-wrap:wrap;
  }

  .survey-card{
    background-color: $neutral-light-s2;
    border-radius:3px 3px 3px 3px;
    flex-basis:100%;
    flex-grow:1;
    color:black;
    padding:1em 1em 1em 1em;
    margin: 2em 2em 2em 2em;
    box-shadow: 0px 6px 4px 1px rgba(0,0,0,0.9);

    /*One card per row on small devices*/
    @media screen and (min-width: 768px){
      flex-basis:40% !important;
      &:last-child:nth-child(odd){
          flex-grow:0;
      }

    }
  }
</style>
