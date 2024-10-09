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

<style scoped lang="scss">
.skills-card {
    border: 1px solid var(--color-accent-dark);
    background-color: var(--color-accent-dark);
    color: var(--color-dark-text);
    padding: 30px 20px;
    border-radius: 10px;
}

.skills-card__title {
    margin-bottom: 10px;
    font-weight: 500;
}
</style>
