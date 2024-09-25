<script>
import SocialLinks from './SocialLinks.vue';

export default {
    components: {
        SocialLinks
    }
}
</script>

<template>
    <section class="main-container__contacts section contacts" id="contacts">
        <div class="contacts__container container">
            <h2 class="contacts__title">Контакты</h2>
            <p class="contsacts__description">Свяжитесь со мной!</p>

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
        </div>
    </section>
</template>

<style scoped>
.contacts__container {
    margin: 0 auto;
    padding: 20px;
}

.contacts__title {
    text-align: center;
    margin-bottom: 20px
}

.contsacts__description {
    margin-bottom: 10px
}

.contacts__social {
    margin-bottom: 20px;
}

.form-description {
    margin-bottom: 10px;
}
</style>
