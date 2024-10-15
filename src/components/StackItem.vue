<script>
export default {
    props: {
        stackItem: {
            type: { name: String, icon: String },
            required: true
        }
    }
}
</script>

<template>
    <li class="stack-item">
        <svg aria-label="Логотип." width="25px" height="25px">
            <use :xlink:href="stackItem.icon"/>
        </svg>
        <span>{{ stackItem.name }}</span>
    </li>
</template>

<style scoped lang="scss">
.stack-item {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: $desktop-width) {
        display: flex;
        gap: 5px;
    }
}
</style>
