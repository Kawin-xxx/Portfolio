<script>
import { SKILLS_ITEMS, STACK_ITEMS } from '@/constants.js'
import SkillsCard from '@/components/SkillsCard.vue'
import StackItem from '@/components/StackItem.vue';
export default {
    components: {
        SkillsCard,
        StackItem
    },
    data() {
        return {
            skillItems: SKILLS_ITEMS,
            stackItems: STACK_ITEMS
        }
    }
}
</script>

<template>
    <section class=" main-container__skills skills section" id="skills">
        <div class="skills__container container">
            <h2 class="skills__title">{{ $t('skills.title') }}</h2>
            <ul class="skills__list">
                <SkillsCard
                    class="skills__item"
                    v-for="(item, index) in skillItems"
                    :key="index"
                    :cardData="item"
                />
            </ul>

            <div class="skills__stack stack">
                <h3 class="stack__title">{{ $t('skills.technologiesTitle') }}</h3>
                <ul class="stack__list">
                    <StackItem
                        class="stack__item"
                        v-for="(item, index) in stackItems"
                        :key="index"
                        :stackItem="item"
                    />
                </ul>
            </div>
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

    @media (min-width: $tablet-width) {
        padding: 40px;
        padding-bottom: 50px;
    }
}

.skills__list {
    list-style: none;
    margin-bottom: 30px;

    @media (min-width: $tablet-width) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
}

.skills__item:not(:last-child) {
    margin-bottom: 30px;

    @media (min-width: $tablet-width) {
        margin-bottom: 0;
    }
}

.stack__title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
}

.stack__list {
    list-style: none;
    width: fit-content;
    margin: 0 auto;

    @media (min-width: $tablet-width) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    @media (min-width: $desktop-width) {
        gap: 40px;
    }
}

.stack__item:not(:last-child) {
    margin-bottom: 20px;

    @media (min-width: $tablet-width) {
        margin-bottom: 0;
    }
}
</style>
