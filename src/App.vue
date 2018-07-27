<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <button @click="showMeal = !showMeal">click for Meals</button>
    <transition name="component-fade" mode="out-in">
      <MealList v-if="showMeal"></MealList>
    </transition>
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)
  import MealList from './components/MealList/'
  // import Meal from "./components/Meal/Meal";

  export default {
    name: 'App',
    components: {
      "MealList": MealList,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        showMeal: false,
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 2s ease;
  }

  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active avant la 2.1.8 */
  {
    opacity: 0;
  }
</style>
