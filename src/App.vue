<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<script>
import { store } from './store.js';
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  mounted() {
    store.projects = {};
    store.projects.data = {};
    axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
      console.log(res.data.results);
      store.projects.data = res.data.results.data;
      store.projects.current_page = res.data.results.current_page;
      store.projects.last_page = res.data.results.last_page;
      store.projects.total = res.data.results.total;
    })
  }
}

</script>

<style lang="scss">
/*
@use '../assets/scss/partials/_variables.scss' as *;
*/
#app {
  background-color: var(--bs-dark);
  min-height: 100vh;
}
</style>