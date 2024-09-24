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
            <a :href="item.link" width="16" height="16" :aria-label="item.name" class="social__link">
                <svg>
                    <use :xlink:href="item.icon" width="24px" height="24px" fill="white"/>
                </svg>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.social__link {
    width: 24px;
    height: 24px;
}

.social__link svg {
    width: 24px;
    height: 24px;
}
</style>
