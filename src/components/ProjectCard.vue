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
        <h3 class="project__title">{{ cardData.name }}</h3>
        <div class="project__photo-wrapper">
            <picture>
                <img class="project__image" src="../../src/assets/img/projects/image1.png" :alt=cardData.name>
            </picture>
        </div>
        <div class="project-card__buttons-wrapper">
            <a :href="cardData.gitLink" class="project-card__button button">Github</a>
            <a :href="cardData.siteLink" class="project-card__button button">Web-site</a>
        </div>
    </li>
</template>

<style scoped lang="scss">
.project-card {
    background-color: var(--color-background);
    border: 1px solid var(--color-accent);
    border-radius: 10px;
    padding: 20px 10px;
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
}

.project-card__buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.button {
    display: block;
    width: fit-content;
    padding: 5px 10px;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    border-radius: 20px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover {
        color: var(--color-dark-text);
        background-color: var(--color-accent);
        box-shadow: 0 0 10px var(--color-accent);
    }
}
</style>
