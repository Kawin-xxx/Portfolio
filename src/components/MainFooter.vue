<script>

export default {
}
</script>

<template>
    <footer class="footer">
        <div class="footer__container container">
            <p class="footer__copyright">
                <svg aria-label="Значок копирайта" width="20px" height="20px" class="footer__icon">
                    <use xlink:href="#icon-copyright" fill="white"/>
                </svg>
                <span class="footer__text">Разработано Екатериной Олейниковой в 2024 году</span>
            </p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    min-height: 60px;
    width: 100%;
    background-color: var(--color-background-dark);
}

.footer__container {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.footer__copyright {
    font-size: 12px;
}

.footer__icon {
    vertical-align: middle;
    margin-right: 3px;
}

.footer__text {
    vertical-align: middle;
}
</style>
