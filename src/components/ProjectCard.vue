<script>

export default {
    props: {
        cardData: {
            type: { name: String, img: String, gitLink: String, siteLink: String },
            required: true
        }
    }
}
</script>

<template>
    <li class="project-card">
        <h3>{{ cardData.name }}</h3>
        <span>{{ cardData.img }}</span>
        <div class="project-card__buttons-wrapper">
            <a :href="cardData.gitLink" class="project-card__button">Git</a>
            <a :href="cardData.siteLink" class="project-card__button">Web-site</a>
        </div>
    </li>
</template>

<style scoped>
</style>
