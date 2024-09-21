<script>
import SocialLinks from './SocialLinks.vue';

export default {
    components: {
        SocialLinks
    }
}
</script>

<template>
    <section class="contacts section" id="contacts">
        <div class="contacts__container container">
            <h2 class="contacts__title">Контакты</h2>
            <p class="contsacts__description">Описание</p>
        </div>

        <SocialLinks class="contacts__social" />

        <div class="contacts__form form">
            <form action="">
                <p class="form-description">Оставьте мне сообщение</p>
                <label for="">
                    <input type="text" placeholder="Имя">
                    <span></span>
                </label>
                <label for="">
                    <input type="text" placeholder="Email">
                    <span></span>
                </label>
                <label for="">
                    <input type="text" placeholder="Сообщение">
                    <span></span>
                </label>
            </form>
        </div>
    </section>
</template>

<style scoped>
</style>
