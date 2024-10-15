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
.main-container__projects {
    background-color: var(--color-background-dark);
}

.projects__container {
    margin: 0 auto;
    padding: 50px 20px 40px;

    @media (min-width: $tablet-width) {
        padding: 50px 40px;
    }
}

.projects__title {
    text-align: center;
    margin-bottom: 20px;
}

.projects__list {
    list-style: none;

    @media (min-width: $tablet-width) {
        grid-template-columns: 1fr 1fr;
        display: grid;
        gap: 20px;
    }

    @media (min-width: $desktop-width) {
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.projects__item:not(:last-child) {
    margin-bottom: 20px;

    @media (min-width: $tablet-width) {
        margin-bottom: 0;
    }
}
</style>
