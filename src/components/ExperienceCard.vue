<script>
export default {
    props: {
        cardData: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <li class="card">
        <span class="card__year">
            {{ $t(`experience.experienceList.${cardData}.yearStart`) }} -
            {{ $t(`experience.experienceList.${cardData}.yearEnd`) }}
        </span>

        <div class="card__button">
            <h3 class="card__title">{{ $t(`experience.experienceList.${cardData}.title`) }}</h3>
            <p class="card__description">{{ $t(`experience.experienceList.${cardData}.description`) }}</p>
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
        transition: .3s ease;
    }

    &:hover {
        .card__button {
            box-shadow: 0 0 20px var(--color-accent);
            transform: scale(1.01);
        }

        &::before {
            transform: scale(1.4);
            box-shadow: 0 0 20px var(--color-border);
        }
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
    transition: .3s ease;

    @media (min-width: $desktop-width) {
        max-width: 1100px;
    }
}

.card__title {
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--color-accent-text);

    @media (min-width: $desktop-width) {
        font-size: 18px;
        margin-bottom: 30px;
    }
}
</style>
