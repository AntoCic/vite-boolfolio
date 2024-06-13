<template>
   <div class="container">
      <div class="row text-center">
         <div v-for="project in store.projects.data" :key="project.id" class="col-3 p-3">
            <div class="my-3 text-white border border-opacity-75 rounded-4 bg-white bg-opacity-10 p-2 h-100">
               <h3>{{ project.name }}</h3>
               <p class="color-sub-title">{{ project.state }}</p>
               <p class="text-truncate">{{ project.description }}</p>
               <template v-if="project.type">
                  <span class="badge text-bg-primary me-1">{{ project.type.name }}</span>
               </template>
               <template v-if="project.technologies">
                  <span v-for="technology in project.technologies" :key="technology.id"
                     class="badge text-bg-warning text-white me-1">{{ technology.name }}</span>
               </template>
            </div>

         </div>
      </div>
   </div>
</template>

<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>


<style lang="scss" scoped>
.color-sub-title{
    color: rgb(252, 232, 54);
}
</style>