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
    <section class="experience" id="experience">
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
</style>
