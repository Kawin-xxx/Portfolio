<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            required: false
        },
    }
}
</script>
<template>
    <a :href="buttonLink" target="_blank" class="button">{{ buttonText }}</a>
</template>

<style scoped lang="scss">

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
        box-shadow: 0 0 20px var(--color-accent);
    }

    &:active {
        box-shadow: 0 0 20px var(--color-accent);
        background-color: var(--color-accent);
        color: var(--color-dark-text);
        opacity: 0.6;
    }
}
</style>
