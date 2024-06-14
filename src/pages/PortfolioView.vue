<template>
   <div class="container">
      <div class="row text-center">
         <CmpCardProject v-for="project in store.projects.data" :key="project.id" :project="project"/>
      </div>
   </div>
</template>

<script>
import { store } from '../store.js';
import CmpCardProject from '../components/CmpCardProject.vue';
export default {
   components: { CmpCardProject},
   data() {
      return {
         store,
      }
   },
}
</script>


<style lang="scss" scoped>
.color-sub-title {
   color: rgb(252, 232, 54);
}
</style>