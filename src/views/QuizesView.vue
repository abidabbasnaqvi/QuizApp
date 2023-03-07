
<template >
    <!-- <div class="container"> -->
    <div>
      <header>
        <h1> Quixz</h1>
        <input type="text" placeholder="Search.. ">
      </header>
      <div class="options-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
        <!-- 
        <div v-for="quiz in quizes" :key="quiz.id" class="card">
          <img src="https://picsum.photos/200/300">
          <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }}</p>
          </div>
        </div> -->
      </div>
    </div>
  
  </template>
  
  <script setup>  
    import q from "../quiz.json"
    import {ref, watch} from  "vue"
    import Card from "../components/Card.vue"
  
    const quizes = ref(q)
    const search = ref("") // Change state quizes when search changes
  
    watch(search, () => { 
      quizes.value = q.filter( quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase())) 
      })
  
  </script>
  
  
  <style scoped>
  
    .container{
      max-width:1000px;
      margin: 0 auto;
    }
  
    header {
      margin-bottom: 10px;
      margin-top : 30px;
      display: flex;
      align-items: center;
    }
  
    header h1{
      font-weight: bold;
      margin-right: 30px;
    }
    
    header input {
       border: none;
       background-color: rgba(128, 128, 128 0.1);
       padding : 10px;
       border-radius: 5px;
    }
  
    .options-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
    }
  
    /** Card **/
  
    
  
  </style>