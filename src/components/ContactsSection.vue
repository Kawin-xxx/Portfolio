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
            <p class="contsacts__description">Свяжитесь со мной!</p>

            <SocialLinks class="contacts__social" />

            <div class="contacts__form-wrapper">
                <ContactsForm />
            </div>
        </div>
    </section>
</template>

<style scoped>
.contacts__container {
    margin: 0 auto;
    padding: 20px;
}

.contacts__title {
    text-align: center;
    margin-bottom: 20px
}

.contsacts__description {
    margin-bottom: 10px
}

.contacts__social {
    margin-bottom: 20px;
}
</style>
