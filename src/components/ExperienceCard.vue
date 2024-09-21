<script>
export default {
    props: {
        cardData: {
            type: { name: String, description: String, yearStart: Number, yearEnd: Number },
            required: true
        }
    }
}
</script>

<template>
    <li class="experience__item card">
        <span class="card__year">{{ cardData.yearStart }}</span>
        <h3 class="card__title">{{ cardData.name }}</h3>
        <p class="card__description">{{ cardData.description }}</p>
    </li>
</template>

<style scoped lang="scss">
</style>
