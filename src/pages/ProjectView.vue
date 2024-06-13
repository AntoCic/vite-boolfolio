<template>
   <div class="container">
      <div v-if="project.name" class="row text-center">
         <div class="my-3 text-white ">
            <h3>{{ project.slug }}</h3>
            <p class="color-sub-title">{{ project.state }}</p>
            <p>{{ project.description }}</p>
            <template v-if="project.type">
               <span class="badge text-bg-primary me-1">{{ project.type.name }}</span>
            </template>
            <template v-if="project.technologies">
               <span v-for="technology in project.technologies" :key="technology.id"
                  class="badge text-bg-warning text-white me-1">{{ technology.name }}</span>
            </template>
            <p>{{ project.url }}</p>
         </div>
      </div>
      <p v-else class="text-danger text-center">Errore caricamento torna alla home</p>
   </div>
</template>

<script>
import { store } from '../store.js';
export default {
   data() {
      return {
         store,
         project: {}
      }
   },
   mounted() {
      if (this.store.projects.data.length) {
         this.project = this.store.projects.data.find((e) => { return e.slug === this.$route.params.slug });
      }
      console.log(this.project);
   }
}
</script>


<style lang="scss" scoped>
.color-sub-title {
   color: rgb(252, 232, 54);
}
</style>
