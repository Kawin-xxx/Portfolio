<script>
import SocialLinks from './SocialLinks.vue';
import ButtonElement from './ButtonElement.vue';

export default {
    components: {
        SocialLinks,
        ButtonElement
    },
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
                <h1 class="about__title about__title--mobile">Привет, меня зовут <span class="about__accent">Катя</span></h1>
                <h1 class="about__title about__title--desktop">Привет, меня зовут <span class="about__accent">Екатерина Олейникова</span></h1>

                <p class="about__text">Я <span class="about__accent about__typing-text">фронтенд разработчик</span></p>
                <p class="about__description">
                    Люблю фронтенд и все, что с ним связано!
                    Имею диплом бакалавра по направлению прикладная
                    математика и информатика и 3 года коммерческого опыта
                </p>

                 <button-element
                    buttonText="Скачать резюме"
                    buttonLink=""
                    class="about__button"
                />

                <SocialLinks class="about__social" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about__container {
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;

    @media (min-width: $tablet-width) {
        padding: 40px;
    }
}

.about__photo-wrapper {
    margin: 0 auto 20px;
    width: max-content;
    position: relative;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        content: "";
        border: 2px solid var(--color-accent);
        background-color: inherit;
        top: 10px;
        left: 10px;
    }
}

.about__image {
    border-radius: 50px;
    border: 2px solid var(--color-border);
    position: relative;
    z-index: 2;

    @media (min-width: $tablet-width) {
        width: 200px;
        height: auto;
    }

    @media (min-width: $desktop-width) {
        width: 250px;
        height: auto;
    }
}

.about__description-wrapper {
    @media (min-width: $desktop-width) {
        text-align: center;
    }
}

.about__title {
    font-size: 25px;

    @media (min-width: $desktop-width) {
        font-size: 35px;
    }

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

.about__accent {
    color: var(--color-accent);
}

.about__typing-text {
    color: var(--color-accent);
    font-weight: bold;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid;
    font-family: monospace;
    vertical-align: bottom;
    animation: typing 4s steps(20, end), blink 0.75s step-end infinite alternate;
}

@keyframes typing {
    from {
        width: 0
    }
}
    
@keyframes blink {
    50% {
        border-color: transparent
    }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 20ch;
  }
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-border);
  }
}

.about__text {
    margin-bottom: 10px;
    font-size: 23px;

    @media (min-width: $desktop-width) {
        font-size: 35px;
    }
}

.about__description {
    margin-bottom: 20px;
    font-size: 18px;

    @media (min-width: $desktop-width) {
        font-size: 20px;
    }
}

.about__button {
    margin-bottom: 20px;

    @media (min-width: $desktop-width) {
        margin: 0 auto 30px;
        font-size: 20px;
    }
}

.about__social {
    @media (min-width: $desktop-width) {
        justify-content: center;
    }
}
</style>
