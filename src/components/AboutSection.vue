<script>
import SocialLinks from './SocialLinks.vue';

export default {
    components: {
        SocialLinks
    }
}
</script>

<template>
    <section class="main-container__about section about" id="about">
        <div class="about__container container">
            <div class="about__photo-wrapper">
                <picture>
                    <!-- <source media="(min-width: 1440px)" srcset="img/slider/flat-desktop.webp 1x, img/slider/flat-desktop@2x.webp 2x">
                    <source media="(min-width: 768px)" srcset="img/slider/flat-tablet.webp 1x, img/slider/flat-tablet@2x.webp 2x">
                    <source type="image/webp" srcset="img/slider/flat.webp 1x, img/slider/flat@2x.webp 2x"> -->

                    <source media="(min-width: 1440px)" srcset="../../src/assets/img/photo/photo-desktop.png 1x, ../../src/assets/img/photo/photo-desktop.png 2x">
                    <source media="(min-width: 768px)" srcset="../../src/assets/img/photo/photo-tablet.png 1x, ../../src/assets/img/photo/photo-tablet.png 2x">
                    <img class="about__image" src="../../src/assets/img/photo/photo-mobile.png" srcset="../../src/assets/img/photo/photo-mobile@2x.png 2x" alt="Автопортрет.">
                </picture>
            </div>

            <div class="about__description-wrapper">
                <h1 class="about__title about__title--mobile">Привет, меня зовут Катя</h1>
                <h1 class="about__title about__title--desktop">Привет, меня зовут Екатерина Олейникова</h1>

                <p class="about__text">Я фронтенд разработчик</p>
                <p class="about__description">
                    Люблю фронтенд и все, что с ним связано!
                    Имею диплом бакалавра по направлению прикладная
                    математика и информатика и 3 года коммерческого опыта
                </p>

                <a href="" class="about__button">Скачать резюме</a>

                <SocialLinks class="about__social" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about__container {
    margin: 0 auto;
    padding: 20px;
}

.about__photo-wrapper {
    margin: 0 auto 20px;
    width: max-content;
}

.about__image {
    border-radius: 20px;

    @media (min-width: $tablet-width) {
        width: 200px;
        height: auto;
    }

    @media (min-width: $desktop-width) {
        width: 250px;
        height: auto;
    }
}

.about__title {
    &--mobile {
        @media (min-width: $tablet-width) {
            display: none;
        }
    }

    &--desktop {
        display: none;

        @media (min-width: $tablet-width) {
            display: block;
        }
    }
}

.about__text {
    margin-bottom: 10px;
}

.about__description {
    margin-bottom: 20px
}

.about__button {
    display: block;
    width: fit-content;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid $color-white;
    border-radius: 20px;
    overflow-wrap: break-word;
    cursor: pointer;
}
</style>
