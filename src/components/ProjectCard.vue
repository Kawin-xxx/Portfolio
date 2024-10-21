<script>
import ButtonElement from './ButtonElement.vue';

export default {
    components: {
        ButtonElement
    },
    props: {
        cardData: {
            type: { name: String, img: String, gitLink: String, siteLink: String },
            required: true
        },
    }
}
</script>

<template>
    <li class="project-card">
        <h3 class="project__title">{{ cardData.name }}</h3>
        <div class="project__photo-wrapper">
            <picture>
                <source type="image/webp" :srcset="`/Portfolio/img/projects/${cardData.img}.webp`">
                <img
                    class="project__image"
                    width="250"
                    height="133"
                    loading="lazy"
                    :src="`/Portfolio/img/projects/${cardData.img}.png`"
                    :alt="`Изображение проекта ${cardData.name}.`"
                >
            </picture>
        </div>
        <div class="project-card__buttons-wrapper" v-if="cardData.gitLink">
            <button-element
                class="project-card__button"
                :buttonLink="cardData.gitLink"
                buttonText="Github"
            />
            <button-element
                class="project-card__button"
                :buttonLink="cardData.siteLink"
                buttonText="Web-site"
            />
        </div>
    </li>
</template>

<style scoped lang="scss">
.project-card {
    background-color: var(--color-background);
    border: 1px solid var(--color-accent);
    border-radius: 10px;
    padding: 20px 10px;
    transition: .2s ease;

    &:hover {
        box-shadow: 0 0 10px var(--color-accent);
        transform: scale(1.05);
    }
}

.project__title {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
}

.project__image {
    border-radius: 5px;
    margin-bottom: 20px;
    width: 100%;
    height: auto;
}

.project-card__buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
</style>
