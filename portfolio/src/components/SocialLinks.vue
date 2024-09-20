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
            <a :href="item.link">{{ item.name }}</a>
        </li>
    </ul>
</template>

<style scoped>
</style>
