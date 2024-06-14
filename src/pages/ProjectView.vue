<template>
   <div class="container">
      <div v-if="project" class="row text-center">
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
   </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios'
export default {
   props: {
      slug: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         store,
         project: null
      }
   },
   mounted() {
      console.log(this.$route.params.slug);
      axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`).then((res) => {
         console.log(res.data.results);
         this.project = res.data.results;
      }).catch((err) => {
         this.$router.push({
            name: 'not-found',
            params: { pathMatch: this.$route.path.substring(1).split('/') },
         })
      })
      // if (this.store.projects.data.length) {
      //    this.project = this.store.projects.data.find((e) => { return e.slug === this.$route.params.slug });
      // }
      // console.log(this.project);
   }
}
</script>


<style lang="scss" scoped>
.color-sub-title {
   color: rgb(252, 232, 54);
}
</style>
