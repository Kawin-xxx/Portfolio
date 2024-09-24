<script>
import { SOCIAL_LINKS } from '@/constants.js'
export default {
    data() {
        return {
            socialLinks: SOCIAL_LINKS
        }
    },
}
</script>

<template>
    <ul class="social">
        <li
            v-for="(item, index) in socialLinks"
            :key="index"
            class="social__item"
        >
            <a :href="item.link" class="social__link">
                <svg :aria-label="item.name" width="24px" height="24px">
                    <use :xlink:href="item.icon" fill="white"/>
                </svg>
                <span class="visually-hidden">Ссылка на социальную сеть вконтакте.</span>
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.social {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.social__item {
    width: 40px;
    height: 40px;
}

.social__link {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $color-white;
    border-radius: 50%;
}
</style>
