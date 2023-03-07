<script setup>
    import Questions from '../components/Questions.vue'
    import QuizHeader from '../components/QuizHeader.vue'
    import Result from "../components/Result.vue"
    import ResultChart from "../components/ResultChart.vue"
    import {useRoute} from "vue-router"
    import {ref, watch, computed} from "vue";
    import quzies from "@/quiz.json"
    

    const route = useRoute()
    const quizId = parseInt(route.params.id);
    const quiz = quzies.find(q => q.id === quizId) 
    const currQindex = ref(0);
    const numberOfCorrectAnswers = ref(0)
    const showResults = ref(false)
    const questionStatus = computed(() => `${currQindex.value}/${quiz.questions.length}`)
    
    const barPercentage = computed(() => `${currQindex.value/quiz.questions.length * 100}%`)
    const onOptionSelected = (isCorrect) => {
        console.log("onOptionSelected Called lenght of quiz is " +  quiz.questions.length)
        console.log("Show is Correct : " + showResults.value)
        console.log("currQindx --: ", currQindex.value)
        if(isCorrect){
            numberOfCorrectAnswers.value++;
        }
        if(quiz.questions.length - 1 === currQindex.value){
            showResults.value = true
            console.log("SHow resutl is ture :" + showResults.value)
        }
        currQindex.value++;
    }

</script>
<template >
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Questions
                v-if="!showResults"
                :question="quiz.questions[currQindex]"
                @selectOption="onOptionSelected"
            />
            <ResultChart 
                v-else
                :quizQuestionsLength="quiz.questions.length"
                :noOfCorrectAns="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>


<style scoped>
    
</style>