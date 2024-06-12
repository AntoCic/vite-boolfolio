<template>
    <main class="">
        <div class="container">
            <div class="row text-white text-center">
                <div class="col-12">
                    <h1>Template Vue + Bootstrap /AntoCic</h1>
                    <ElmBtnCount btnText="Cliccami" />
                </div>
                <div v-for="project in store.projects.data" :key="project.id" class="col-3 p-3">
                    <div class="my-3 text-white border border-opacity-75 rounded-4 bg-white bg-opacity-10 p-2 h-100">
                        <h3>{{ project.name }}</h3>
                        <p class="color-secondary">{{ project.state }}</p>
                        <p class="text-truncate">{{ project.description }}</p>
                        <template v-if="project.type">
                            <span class="badge text-bg-primary me-1">{{ project.type.name }}</span>
                        </template>
                        <template v-if="project.technologies">
                            <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-warning text-white me-1">{{ technology.name }}</span>
                        </template>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import ElmBtnCount from './ElmBtnCount.vue'
export default {
    components: { ElmBtnCount },
    data() {
        return {
            store,
        }
    },
}
</script>


<style lang="scss" scoped></style>