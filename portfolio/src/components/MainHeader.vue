<script>

export default {
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
                <button class="navigation__toggle navigation__toggle--close" type="button">
                    <span class="visually-hidden">Открыть меню</span>
                </button>
                <ul class="navigation__list site-list">
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
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header__container {
    display: flex;
    justify-content: space-between;
}

.site-list {
    list-style: none;
    display: flex;
    column-gap: 30px;
}

.navigation__toggle--close {
    display: none;
}

.navigation__toggle--open {
    display: block;
}
</style>
