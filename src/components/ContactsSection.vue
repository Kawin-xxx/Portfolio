<script>
import SocialLinks from './SocialLinks.vue';
import ContactsForm from './ContactsForm.vue';

export default {
    components: {
        SocialLinks,
        ContactsForm
    }
}
</script>

<template>
    <section class="main-container__contacts section contacts" id="contacts">
        <div class="contacts__container container">
            <h2 class="contacts__title">Контакты</h2>
            <div class="contacts__wrapper">
                <div class="contacts__social-wrapper">
                    <p class="contsacts__description">Свяжитесь со мной!</p>
                    <SocialLinks class="contacts__social" />
                </div>

                <ContactsForm class="contacts__form"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contacts__container {
    margin: 0 auto;
    padding: 20px;

    @media (min-width: $tablet-width) {
        padding: 40px;
    }
}

.contacts__title {
    text-align: center;
    margin-bottom: 20px
}

.contacts__wrapper {
    @media (min-width: $tablet-width) {
        display: flex;
        justify-content: space-between;
        column-gap: 30px;
    }

    @media (min-width: $desktop-width) {
        display: block;
    }
}

.contacts__social-wrapper {
    @media (min-width: $desktop-width) {
        margin: 0 auto;
        width: fit-content;
    }
}

.contsacts__description {
    margin-bottom: 10px;

    @media (min-width: $desktop-width) {
        font-size: 20px;
        text-align: center;
    }
}

.contacts__social {
    margin-bottom: 20px;

    @media (min-width: $tablet-width) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: fit-content;
    }

    @media (min-width: $desktop-width) {
        flex-direction: row;
        margin-bottom: 30px;
    }
}

.contacts__form {
    flex: 1;

    @media (min-width: $desktop-width) {
        flex: none;
        width: 40%;
        margin: 0 auto;
    }
}
</style>
