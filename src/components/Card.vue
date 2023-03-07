<template>
     <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p> {{ quiz.questions.length }}</p>
        </div>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


    //import { defineProps } from 'vue';
    const router = useRouter()
    const {quiz} = defineProps(['quiz'])
    const navigateToQuiz = () => {
        router.push(`/quiz/${quiz.id}`);
       
        // moschte
        //sting interpolation 
        // "++"
    }
    console.log(quiz)

</script>

<style scoped>

.card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0 ,0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card:hover{
    transform: scale(1.05);
    box-shadow: 0px 2px 2px 2px rgba(255, 228, 196, 0.8);
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0
  }

  .card .card-text{
    padding: 0 5px

  }

  .card .card-text {
    font-weight: bold
  }
</style>