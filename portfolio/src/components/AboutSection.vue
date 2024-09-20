<script>
import SocialLinks from './SocialLinks.vue';


export default {
    components: {
        SocialLinks
    }
}
</script>

<template>
    <section class="about" id="about">
        <div class="about__container container">
            <div class="about__description">
                <h1 class="about__title">Привет, меня зовут Екатерина Олейникова</h1>
                <p class="about__description">Я фронтенд разработчик</p>
                <p class="about__description">Люблю фронтенд и все, что с ним связано!
                    Имею диплом бакалавра по направлению прикладная
                    математика и информатика и 3 года коммерческого опыта
                </p>

                <SocialLinks class="about__social" />

                <a href="" class="about__button">Скачать резюме</a>
            </div>

            <div class="about__photo">Тут фото</div>
        </div>
    </section>
</template>

<style scoped>
</style>
