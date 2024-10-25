<script>
export default {
    data() {
        return {
            status: '',
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    },
    methods: {
        async handleSubmit(evt) {
            try {
                const data = new FormData(evt.target);
                const res = await fetch('https://formspree.io/f/xanwgrae', {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' },
                });

                if (res.ok) {
                    this.handleSuccess();
                } else {
                    const json = await res.json();
                    this.handleError(json);
                }
            } catch (err) {
                console.log(err)
                console.error(err);
                this.status = 'Ой-ой! Что-то пошло не так.';
            }
        },

        handleError(json) {
            if (Object.hasOwn(json, 'errors')) {
                const errors = json.errors.map((error) => error.message).join(', ');
                throw new Error(errors);
            } else {
                this.status = 'Ой-ой! Что-то пошло не так.';
            }
        },

        handleSuccess() {
            this.status = "Ваше сообщение отправлено.";
            this.resetForm();
            setTimeout(() => {
                this.status = '';
            }, 5000);
        },

        resetForm() {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
        }
    },
}
</script>

<template>
    <form
        action="https://formspree.io/f/xanwgrae"
        method="post"
        class="form"
        @submit.prevent="handleSubmit"
    >
        <p class="form__description">{{ $t('contacts.formText') }}</p>
        <div class="form__inputs-wrapper">
            <label for="name" class="form__label">
                <input
                    v-model="name"
                    id="name"
                    name="name"
                    type="text"
                    :placeholder="$t('contacts.formFields.name')"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">{{ $t('contacts.formFields.name') }}</span>
            </label>

            <label for="email" class="form__label">
                <input
                    v-model="email"
                    id="email"
                    name="email"
                    type="email"
                    :placeholder="$t('contacts.formFields.email')"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">{{ $t('contacts.formFields.email') }}</span>
            </label>

            <label for="phone" class="form__label">
                <input
                    v-model="phone"
                    id="phone"
                    name="phone"
                    type="number"
                    :placeholder="$t('contacts.formFields.phone')"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">{{ $t('contacts.formFields.phone') }}</span>
            </label>

            <label for="message" class="form__label">
                <textarea
                    v-model="message"
                    id="message"
                    name="message"
                    type="text"
                    :placeholder="$t('contacts.formFields.message')"
                    required
                    class="form__textarea"
                ></textarea>
                <span class="form__placeholder">{{ $t('contacts.formFields.message') }}</span>
            </label>
        </div>
        <span class="form__message">{{ status }}</span>

        <div class="form__buttons-wrapper">
            <button type="submit" class="form__button form__button--accent">
                {{ $t('contacts.buttonSend') }}
            </button>

            <button type="reset" class="form__button">
                {{ $t('contacts.buttonClear') }}
            </button>
        </div>
    </form>
</template>

<style scoped lang="scss">
.form__description {
    margin-bottom: 10px;

    @media (min-width: $desktop-width) {
        font-size: 20px;
    }
}

.form__label {
    position: relative;
}

.form__placeholder {
    position: absolute;
    display: block;
    top: 15px;
    left: 20px;
    font-size: 16px;
    line-height: 20px;
    transition: 0.3s ease;

    @media (min-width: $desktop-width) {
        font-size: 18px;
    }
}

.form__inputs-wrapper {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form__input,
.form__textarea {
    width: 100%;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 10px;
    border: 1px solid var(--color-accent);
    background-color: var(--color-background);
    box-shadow: 0 0 3px var(--color-accent);
    color: var(--color-text);

    &::placeholder {
        color: transparent;
    }

    &:not(:placeholder-shown) + .form__placeholder,
    &:focus + .form__placeholder {
        position: absolute;
        display: block;
        top: 0;
        left: 20px;
        font-size: 10px;
        line-height: 20px;
        transition: 0.3s ease;
    }

    &:hover,
    &:focus {
        background-color: var(--color-background-dark);
    }

    @media (min-width: $desktop-width) {
        width: 100%;
        font-size: 17px;
    }
}

.form__textarea {
    height: 150px;
    resize: none;
}

.form__message {
    display: inline-block;
    margin-bottom: 20px;
}

.form__buttons-wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.form__button {
    display: block;
    width: fit-content;
    font-size: 17px;
    padding: 10px 20px;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    background-color: inherit;
    border-radius: 20px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 10px var(--color-accent);
    }

    &:active {
        box-shadow: 0 0 20px var(--color-accent);
        background-color: var(--color-accent);
        color: var(--color-dark-text);
        opacity: 0.6;
    }

    &--accent {
        background-color: var(--color-accent);
        color: var(--color-dark-text);
    }
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>
