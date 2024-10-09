<script>
import { EXPERIENS_ITEMS } from '@/constants.js'
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
    components: {
        ExperienceCard 
    },
    data() {
        return {
            experienceItems: EXPERIENS_ITEMS
        }
    }
}
</script>

<template>
    <section class="main-container__experience section experience" id="experience">
        <div class="experience__container container">
            <h2 class="experience__title">Мой опыт</h2>
            <ul class="experience__list">
                <ExperienceCard
                    v-for="(item, index) in experienceItems"
                    :key="index"
                    :cardData="item"
                />
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main-container__experience {
    background-color: var(--color-background-dark);
}

.experience__container {
    margin: 0 auto;
    padding: 50px 20px 40px;

    @media (min-width: $tablet-width) {
        padding: 50px 40px;
    }
}

.experience__title {
    margin-bottom: 20px;
    text-align: center;
}

.experience__list {
    list-style: none;
    padding-left: 20px;
    padding-top: 5px;
    position: relative;

    &::before {
        width: 2px;
        height: 100%;
        background-color: var(--color-accent);
        box-shadow: 0 0 10px var(--color-accent);
        position: absolute;
        left: 0;
        top: 0;
        content: "";
    }
}
</style>
