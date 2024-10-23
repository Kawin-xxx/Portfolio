<script>
import { PROJECTS_ITEMS } from '@/constants.js'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projectsItems: PROJECTS_ITEMS,
            currentCategory: 'All'
        }
    },
    computed: {
        currentProjects() {
            const filters = {
                All: () => this.projectsItems,
                Sites: () => this.projectsItems.filter(item => item.isSite),
                Design: () => this.projectsItems.filter(item => item.isDesign),
            };

            return (filters[this.currentCategory] || filters['All'])();
        }
    },
    methods: {
        changeCategory(category) {
            this.currentCategory = category;
        }
    }
}
</script>

<template>
    <section class="main-container__projects section projects" id="projects">
        <div class="projects__container container">
            <h2 class="projects__title">{{ $t('projects.title') }}</h2>
            <div class="projects__buttons-wrapper">
                <button
                    class="projects__button"
                    :class="{ 'projects__button--active': currentCategory==='Sites' }"
                    @click="changeCategory('Sites')"
                >
                    {{ $t('projects.categories.sites') }}
                </button>

                <button
                    class="projects__button"
                    :class="{ 'projects__button--active': currentCategory==='Design' }"
                    @click="changeCategory('Design')"
                >
                    {{ $t('projects.categories.design') }}
                </button>
                <button
                    class="projects__button"
                    :class="{ 'projects__button--active': currentCategory==='All' }"
                    @click="changeCategory('All')"
                >
                    {{ $t('projects.categories.all') }}
                </button>
            </div>
            <ul class="projects__list">
                <ProjectCard
                    class="projects__item"
                    v-for="(item, index) in currentProjects"
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

.projects__buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;

    @media (min-width: $tablet-width) {
        gap: 30px;
    }
}

.projects__button {
    background-color: var(--color-background-light);
    padding: 10px 15px;
    border-radius: 40px;
    border: none;
    font-size: 17px;
    color: var(--color-dark-text);
    cursor: pointer;
    vertical-align: middle;

    &--active {
        background-color: var(--color-accent);
    }
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
