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
    <section class="main-container__projects section projects" id="projects">
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

<style scoped lang="scss">
.projects__container {
    margin: 0 auto;
    padding: 50px 20px 30px;
}

.projects__title {
    text-align: center;
    margin-bottom: 20px;
}

.projects__list {
    list-style: none;
}

.projects__item:not(:last-child) {
    margin-bottom: 20px;
}
</style>
