<script>
import { MENU_ITEMS } from '@/constants.js'
export default {
    data() {
        return {
            isMenuOpen: false,
            menuItems: MENU_ITEMS,
            activeSection: ''
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToSection(sectionName) {
            this.activeSection = sectionName;
        }
    },
}
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <div class="header__logo-wrapper logo">
                <a class="logo__link" href="#">
                    Логотип
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

                <transition name="fade">
                    <ul class="navigation__list site-list" v-if="isMenuOpen">
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
    background-color: black;
}

.header__container {
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
}

.navigation {
    height: 60px;
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
    border-left: 1px solid $color-white;
    border-bottom: 1px solid $color-white;
}

.site-list {
    list-style: none;
    background-color: $color-black;

    & .site-list__link {
        height: 100%;
        display: block;
        border-bottom: 1px solid transparent;
        padding-bottom: 0;

        &--active {
            border-bottom: 1px solid $color-white;
            color: $color-white;
        }
    }
}

.navigation__toggle {
  border: none;
  position: relative;
  background-color: inherit;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.navigation__toggle--close {
  &::before {
    content: "";
    position: absolute;
    top: 24px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    box-shadow: 0 5px 0 0 $color-white, 0 10px 0 0 $color-white;
    background-color: $color-white;
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
    background-color: $color-white;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    transform: rotate(-45deg);
    background-color: $color-white;
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
</style>
