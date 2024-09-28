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
    <section class=" main-container__skills skills section" id="skills">
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

<style scoped lang="scss">
.skills__title {
    text-align: center;
    margin-bottom: 20px;
}

.skills__container {
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;
}

.skills__list {
    list-style: none;
}

.skills__item:not(:last-child) {
    margin-bottom: 30px;
}
</style>
