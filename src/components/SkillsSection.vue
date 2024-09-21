<script>
import { SKILLS_ITEMS } from '@/constants.js'
import SkillsCard from '@/components/SkillsCard.vue'
export default {
    components: {
        SkillsCard
    },
    data() {
        return {
            skillItems: SKILLS_ITEMS
        }
    }
}
</script>

<template>
    <section class="skills" id="skills">
        <div class="skills__container container">
            <h2 class="skills__title">Мои навыки</h2>
            <ul class="skills__list">
                <SkillsCard
                    class="skills__item"
                    v-for="(item, index) in skillItems"
                    :key="index"
                    :cardData="item"
                />
            </ul>
        </div>
    </section>
</template>

<style scoped>
</style>
