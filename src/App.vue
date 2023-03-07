<template >
  <div class="page">
      <div class="cont">
        <RouterView />
      </div>
  </div>
  <div class="foot">
      <small>Copyright &copy; </small>
       <a >https://www.linkedin.com/in/syed-abid-abbas-naqvi-091a2a227/</a>
  </div>

</template>

<script setup>  
import {} from "vue-router"
</script>


<style scoped>
  .page {
    width: 100%;
    height: 100%;
  }
  .cont{
    width: 999px;
    margin: 0 auto;
    flex:auto
  }

  .foot {
  position:fixed;
  bottom:0;
  left:0;
  color: white;
  width:100%;
  padding: 5px;
  height: 60px;
  background-color: 	rgba(35, 21, 75, 1);
  text-align:center;
  }

  .foot a {
    color:black;
    text-align: center
  }
  

</style>