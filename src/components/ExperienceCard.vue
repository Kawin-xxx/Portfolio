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
        <div class="card__button">
            <h3 class="card__title">{{ cardData.name }}</h3>
            <p class="card__description">{{ cardData.description }}</p>
        </div>
    </li>
</template>

<style scoped lang="scss">
.card {
    position: relative;

    &::before {
        width: 20px;
        height: 20px;
        border-radius: 30px;
        background-color: var(--color-accent);
        box-shadow: 0 0 10px var(--color-accent);
        position: absolute;
        left: -29px;
        top: 0;
        content: "";
    }
}

.card__year {
    display: inline-block;
    margin-bottom: 10px;

    @media (min-width: $desktop-width) {
        font-size: 25px;
    }
}

.card__button {
    border: 1px solid var(--color-accent);
    box-shadow: 0 0 10px var(--color-accent);
    border-radius: 50px;
    padding: 30px;

    @media (min-width: $desktop-width) {
        max-width: 1100px;
    }
}

.card__title {
    font-weight: 500;
    margin-bottom: 20px;

    @media (min-width: $desktop-width) {
        font-size: 18px;
    }
}

.experience__item:not(:last-child) {
    margin-bottom: 30px;
}
</style>
