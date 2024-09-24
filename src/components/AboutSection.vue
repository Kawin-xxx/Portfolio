<script>
import SocialLinks from './SocialLinks.vue';


export default {
    components: {
        SocialLinks
    }
}
</script>

<template>
    <section class="about section" id="about">
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

            <div class="about__photo">
                <picture>
                  <!-- <source media="(min-width: 1440px)" srcset="img/slider/flat-desktop.webp 1x, img/slider/flat-desktop@2x.webp 2x">
                  <source media="(min-width: 768px)" srcset="img/slider/flat-tablet.webp 1x, img/slider/flat-tablet@2x.webp 2x">
                  <source type="image/webp" srcset="img/slider/flat.webp 1x, img/slider/flat@2x.webp 2x"> -->

                  <source media="(min-width: 1440px)" srcset="../../src/assets/img/photo/photo-desktop.png 1x, ../../src/assets/img/photo/photo-desktop.png 2x">
                  <source media="(min-width: 768px)" srcset="../../src/assets/img/photo/photo-tablet.png 1x, ../../src/assets/img/photo/photo-tablet.png 2x">
                  <img class="about__image" src="../../src/assets/img/photo/photo-mobile.png" srcset="../../src/assets/img/photo/photo-mobile@2x.png 2x" alt="Автопортрет.">
                </picture>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about__image {
  @media (min-width: $tablet-width) {
    width: 200px;
    height: auto;
  }

  @media (min-width: $desktop-width) {
    width: 250px;
    height: auto;
  }
}
</style>
