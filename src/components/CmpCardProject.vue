<template>
  <div class="col-3 p-3">
    <RouterLink :to="{ name: 'project', params: { slug: project.slug } }"
      class="d-block my-3 text-white border border-opacity-75 rounded-4 bg-white bg-opacity-10 p-2 h-100">
      <p class="color-sub-title">{{ project.state }}</p>
      <p class="text-truncate">{{ project.description }}</p>
      <template v-if="project.type">
        <span class="badge text-bg-primary me-1">{{ project.type.name }}</span>
      </template>
      <template v-if="project.technologies">
        <span v-for="technology in project.technologies" :key="technology.id"
          class="badge text-bg-warning text-white me-1">{{ technology.name }}</span>
      </template>
    </RouterLink>

  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
}
</script>


<style lang="scss" scoped>
.color-sub-title {
  color: rgb(252, 232, 54);
}
</style>