<script>
export default {
    props: {
        cardData: {
            type: { name: String, description: String },
            required: true
        }
    }
}
</script>

<template>
    <li class="skills-card">
        <h3 class="skills-card__title">{{ cardData.name }}</h3>
        <p class="skills-card__description">{{ cardData.description }}</p>
    </li>
</template>

<style scoped>
</style>
