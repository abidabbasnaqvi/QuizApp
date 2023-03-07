<template>
   
    <div class="fbox">
        <div class="head">
           
            <p>Your Results...</p>
                <h1>
                    {{ noOfCorrectAns }}/{{ quizQuestionsLength }}
                </h1>
                <div class="goback">
                <RouterLink to="/" >Go Back</RouterLink>
            </div>  
        </div>
        <div class="dchart">
            <Doughnut :data="data" :options="options" />
        </div>
    </div>
        
  </template>
  
  <script>
  import {RouterLink} from "vue-router"
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  
  ChartJS.register(ArcElement, Tooltip, Legend)


   
  
  export default {
    name: 'App',
    components: {
      Doughnut
    },
    props: ['quizQuestionsLength', 'noOfCorrectAns'],
    
    data() {
      return {
          data: {
            labels: ['Questions', 'NumberOfCorrectAnswers'],
            datasets: [
              {
                  backgroundColor: ['#41B883', '#E46651'],
                  data: [this.quizQuestionsLength, this.noOfCorrectAns]
                  }
              ]
          },
          options: {
            responsive: true
          }
        }
    }
  }
  </script>
  
<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.75em;
	font-size: 16px;
	background-color: #222;
	color: #aaa;
}

.fbox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.head {
        max-width: 50%;
        padding: 30px 0;
    }

.goback {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    margin: 10px;
}

.dchart {
      max-width: 50%;
      height: 350px;
      width: 3500px;
}

.simple-container {
	max-width: 675px;
	margin: 0 auto;
	padding-top: 70px;
	padding-bottom: 20px;
}

.simple-print {
	fill: white;
	stroke: white;
}
.simple-print svg {
	height: 100%;
}

.simple-close {
	color: white;
	border-color: white;
}

.simple-ext-info {
	border-top: 1px solid #aaa;
}

p {
	font-size: 16px;
}

h1 {
	font-size: 30px;
	line-height: 34px;
}

h2 {
	font-size: 20px;
	line-height: 25px;
}

h3 {
	font-size: 16px;
	line-height: 27px;
	padding-top: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #D8D8D8;
	border-top: 1px solid #D8D8D8;
}

hr {
	height: 1px;
	background-color: #d8d8d8;
	border: none;
	width: 100%;
	margin: 0px;
}

a[href] {
	color: #1e8ad6;
}

a[href]:hover {
	color: #3ba0e6;
}

img {
	max-width: 100%;
}

li {
	line-height: 1.5em;
}

aside,
[class *= "sidebar"],
[id *= "sidebar"] {
	max-width: 90%;
	margin: 0 auto;
	border: 1px solid lightgrey;
	padding: 5px 15px;
}

@media (min-width: 1921px) {
	body {
		font-size: 18px;
	}
}
</style>