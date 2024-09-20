<script>

export default {
}
</script>

<template>
    <section class="contacts" id="contacts">
        <div class="contacts__container container">
            <h2 class="contacts__title">Контакты</h2>
            <p class="contsacts__description">Описание</p>
        </div>

        <ul class="contacts__social social">
            <li class="social__item">
                <a class="social__link" href="">Гит</a>
            </li>
            <li class="social__item">
                <a class="social__link" href="">Тг</a>
            </li>
            <li class="social__item">
                <a class="social__link" href="">Иг</a>
            </li>
            <li class="social__item">
                <a class="social__link" href="">Вк</a>
            </li>
        </ul>

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
    </section>
</template>

<style scoped>
</style>
