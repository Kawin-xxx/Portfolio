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
    },
}
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <div class="header__logo-wrapper logo">
                <a class="logo__link" href="#">
                    <svg aria-label="Логотип." width="200px" height="25px">
                        <use xlink:href="#icon-logo" fill="white"/>
                    </svg>
                </a>
            </div>

            <nav class="header__navigation navigation">
                <button
                    class="navigation__toggle"
                    :class="{ 'navigation__toggle--open': isMenuOpen, 'navigation__toggle--close': !isMenuOpen }"
                    type="button"
                    @click="toggleMenu"
                    :aria-expanded="isMenuOpen"
                >
                    <span class="visually-hidden">
                        {{ isMenuOpen ? 'Закрыть меню' : 'Открыть меню' }}
                    </span>
                </button>

                <ul class="navigation__list site-list" :class="{ 'site-list--open': isMenuOpen }">
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                        class="site-list__item"
                    >
                        <a
                            :href="'#'+ item.href"
                            @click="scrollToSection(item.href)"
                            class="site-list__link"
                            :class="{ 'site-list__link--active': activeSection === item.href }"
                        >
                            {{ item.name }}
                        </a>
                    </li>
                    <li class="site-list__item checkbox">
                        <toggle-button @changeTheme="changeTheme"></toggle-button>
                    </li>
                </ul>
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
    min-height: 60px;

    @media (min-width: $tablet-width) {
        height: 100%;
        min-height: 80px;
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
    }
}

.site-list {
    display: none;
    list-style: none;
    background-color: var(--color-background-dark);

    @media (min-width: $tablet-width) {
        display: flex;
        flex-wrap: wrap;
    }

    & .site-list__link {
        height: 100%;
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
        }
    }

    &.site-list--open {
        display: block;
    }

    & .site-list__item {
        display: flex;
        align-items: center;
    }
}

.navigation__toggle {
  border: none;
  position: relative;
  background-color: inherit;
  width: 60px;
  min-height: 60px;
  cursor: pointer;

    @media (min-width: $tablet-width) {
        display: none;
    }
}

.navigation__toggle--close {
  &::before {
    content: "";
    position: absolute;
    top: 24px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    box-shadow: 0 5px 0 0 var(--color-accent), 0 10px 0 0 var(--color-accent);
    background-color: var(--color-accent);
  }
}

.navigation__toggle--open {
  &::before {
    content: "";
    position: absolute;
    top: 30px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    transform: rotate(45deg);
    background-color: var(--color-accent);
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    transform: rotate(-45deg);
    background-color: var(--color-accent);
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

.logo {
    display: flex;
    align-items: center;
}

.logo__link {
    display: flex;
    align-items: center;
    height: 100%;
}
</style>
