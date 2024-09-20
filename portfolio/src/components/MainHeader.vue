<script>

export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
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
                        <li class="site-list__item">
                            <a href="" class="site-list__link">Home</a>
                        </li>
                        <li class="site-list__item">
                            <a href="" class="site-list__link">Education</a>
                        </li>
                        <li class="site-list__item">
                            <a href="" class="site-list__link">Services</a>
                        </li>
                        <li class="site-list__item">
                            <a href="" class="site-list__link">Contact</a>
                        </li>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header__container {
    display: flex;
    justify-content: space-between;
}

.site-list {
    list-style: none;
    display: flex;
    column-gap: 30px;
    background-color: white;
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
    background-color: white;
    box-shadow: 0 5px 0 0 white, 0 10px 0 0 white;
    // background-color: $color-black;
    // box-shadow: 0 5px 0 0 $color-black, 0 10px 0 0 $color-black;
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
    // background-color: $color-black;
    background-color: white;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 22px;
    height: 1.5px;
    width: 16px;
    transform: rotate(-45deg);
    // background-color: $color-black;
    background-color: white;
  }
}

.navigation__list {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 2;
    top: 60px;
    display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
