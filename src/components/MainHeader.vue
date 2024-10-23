<script>
import { MENU_ITEMS } from '@/constants.js'
import ToggleButton from './ToggleButton.vue';
export default {
    components: { ToggleButton },
    data() {
        return {
            isMenuOpen: false,
            menuItems: MENU_ITEMS,
            activeSection: '',
            isDarkTheme: true,
            isMobile: window.innerWidth <= 768
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToSection(sectionName) {
            this.activeSection = sectionName;
        },
        changeTheme() {
            const newTheme = this.isDarkTheme ? 'light' : 'dark';
            this.isDarkTheme = !this.isDarkTheme;
            document.documentElement.setAttribute('color-theme', newTheme);
            localStorage.setItem('color-theme', newTheme);
        },
        checkScreenSize() {
            this.isMobile = window.innerWidth < 768;
            this.isMenuOpen = this.isMobile ? false : true;
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    },
    mounted() {
        window.addEventListener('resize', this.checkScreenSize);
        this.checkScreenSize();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    }
}
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <div class="header__logo-wrapper logo">
                <a class="logo__link" href="#">
                    <svg :aria-label="$t('header.logoText')" width="200px" height="25px" v-if="isDarkTheme">
                        <use xlink:href="#icon-logo-dark" fill="white"/>
                    </svg>
                    <svg :aria-label="$t('header.logoText')" width="200px" height="25px" v-if="!isDarkTheme">
                        <use xlink:href="#icon-logo-light" fill="white"/>
                    </svg>
                </a>
            </div>

            <nav class="header__navigation navigation">
                <button
                    class="navigation__toggle"
                    :class="{ 'navigation__toggle--open': isMenuOpen }"
                    type="button"
                    @click="toggleMenu"
                    :aria-expanded="isMenuOpen"
                >
                    <div class="navigation__toggle-icon"></div>
                    <span class="visually-hidden">
                        {{ isMenuOpen ? $t('header.closeMenu') : $t('header.openMenu') }}
                    </span>
                </button>

                <transition name="fade">
                    <ul v-if="isMenuOpen" class="navigation__list site-list" :class="{ 'site-list--open': isMenuOpen }">
                        <li
                            v-for="(item, index) in menuItems"
                            :key="index"
                            class="site-list__item"
                        >
                            <a
                                :href="'#'+ item"
                                @click="scrollToSection(item)"
                                class="site-list__link"
                                :class="{ 'site-list__link--active': activeSection === item }"
                            >
                                {{ $t(`header.navList.${item}`) }}
                            </a>
                        </li>
                        <li class="site-list__item checkbox">
                            <toggle-button @changeTheme="changeTheme"></toggle-button>
                        </li>
                        <li class="site-list__item">
                            <div class="navigation__lang-buttons">
                                <button @click="changeLanguage('en')" class="lang-button">
                                    <span class="lang-button__text">EN</span>
                                    <img width="25" height="25" src="/img/languages/usa.png">
                                </button>

                                <button @click="changeLanguage('ru')" class="lang-button">
                                    <span class="lang-button__text">RU</span>
                                    <img width="25" height="25" src="/img/languages/russia.png">
                                </button>
                            </div>
                        </li>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    min-height: 60px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 5;
    background-color: var(--color-background-dark);

    @media (min-width: $tablet-width) {
        height: fit-content;
        min-height: 80px;
    }
}

.header__container {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;

    @media (min-width: $tablet-width) {
        padding: 0 20px;
        gap: 30px;
    }
}

.navigation {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: $tablet-width) {
        height: 100%;
        min-height: 80px;
        gap: 40px;
    }
}

.navigation__list {
    border-bottom-left-radius: 10px;
    position: absolute;
    width: 50%;
    z-index: 2;
    top: 60px;
    right: 0;
    display: block;
    padding: 10px;
    border-left: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    @media (min-width: $tablet-width) {
        position: static;
        width: 100%;
        border: none;
        top: 0;
        gap: 20px;
        padding: 0;
        height: 100%;
        min-height: 80px;
        border-left: 0;
    }

    @media (min-width: $desktop-width) {
        gap: 40px;
    }
}

.site-list {
    display: none;
    list-style: none;
    background-color: var(--color-background-dark);

    & .site-list__link {
        height: 100%;
        min-height: 35px;
        display: block;
        border-bottom: 1px solid transparent;
        padding-bottom: 0;
        color: var(--color-text);

        &--active {
            border-bottom: 1px solid var(--color-accent);
            color: var(--color-accent);
        }

        &:hover {
            color: var(--color-accent);
            border-bottom: 1px solid var(--color-accent);
        }

        @media (min-width: $tablet-width) {
            height: fit-content;
            min-height: fit-content;
        }

        @media (min-width: $desktop-width) {
            font-size: 20px;
        }
    }

    &.site-list--open {
        display: block;

        @media (min-width: $tablet-width) {
            display: flex;
            flex-wrap: wrap;
        }
    }

    & .site-list__item {
        display: flex;
        align-items: center;

        &:nth-last-child(2) {
            margin-bottom: 15px;

            @media (min-width: $tablet-width) {
                margin-bottom: 0;
            }
        }
    }
}

.navigation__toggle {
    width: 60px;
    height: 60px;
    transition-duration: 0.5s;
    background-color: inherit;
    border: none;
    position: relative;

    @media (min-width: $tablet-width) {
        display: none;
    }

    .navigation__toggle-icon {
        transition-duration: 0.5s;
        position: absolute;
        height: 2px;
        width: 30px;
        top: 30px;
        left: 15px;
        background-color: var(--color-accent);

        &:before {
            transition-duration: 0.5s;
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: var(--color-accent);
            content: "";
            top: -10px;
            left: 0;
        }

        &:after {
            transition-duration: 0.5s;
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: var(--color-accent);
            content: "";
            top: 11px;
            left: 0;
        }
    }

    &.navigation__toggle--open {
        .navigation__toggle-icon {
            transition-duration: 0.5s;
            background: transparent;

            &:before{
                transform: rotateZ(45deg) scaleX(1.25) translate(4px, 13px);
            }

            &:after{
                transform: rotateZ(-45deg) scaleX(1.25) translate(1px, -10px);
            }
        }
    }

    &:hover {
        cursor: pointer;
    }
}

.logo {
    display: flex;
    align-items: center;
}

.logo__link {
    display: flex;
    align-items: center;
    height: 100%;

    &:hover {
        opacity: 0.7;
    }

    @media (min-width: $desktop-width) {
        & svg {
            height: 35px;
            width: auto;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.navigation__lang-buttons {
    display: flex;
    gap: 5px;

    button {
        border: none;
        background-color: inherit;
        color: var(--color-text);
        cursor: pointer;
    }
}

.lang-button__text {
    vertical-align: top;
    font-size: 9px;
}
</style>
