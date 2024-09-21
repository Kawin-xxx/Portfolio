<script>
import { PROJECTS_ITEMS } from '@/constants.js'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projectsItems: PROJECTS_ITEMS
        }
    }
}
</script>

<template>
    <section class="projects" id="projects">
        <div class="projects__container container">
            <h2 class="projects__title">Мои проекты</h2>
            <ul class="projects__list">
                <ProjectCard
                    class="projects__item"
                    v-for="(item, index) in projectsItems"
                    :key="index"
                    :cardData="item"
                />
            </ul>
        </div>
    </section>
</template>

<style scoped>
</style>
