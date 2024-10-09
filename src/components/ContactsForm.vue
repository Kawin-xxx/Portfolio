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
        class="contacts__form form"
        @submit.prevent="handleSubmit"
    >
        <p class="form__description">Оставьте мне сообщение</p>
        <div class="form__inputs-wrapper">
            <label for="name" class="form__label">
                <input
                    v-model="name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">Имя</span>
            </label>

            <label for="email" class="form__label">
                <input
                    v-model="email"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">Email</span>
            </label>

            <label for="phone" class="form__label">
                <input
                    v-model="phone"
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="Номер телефона"
                    required
                    class="form__input"
                >
                <span class="form__placeholder">Телефон</span>
            </label>

            <label for="message" class="form__label">
                <textarea
                    v-model="message"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Сообщение"
                    required
                    class="form__textarea"
                ></textarea>
                <span class="form__placeholder">Сообщение</span>
            </label>
        </div>
        <span class="form__message">{{ status }}</span>

        <div class="form__buttons-wrapper">
            <button type="submit" class="form__button">
                Отправить
            </button>

            <button type="reset" class="form__button">
                Очистить
            </button>
        </div>
    </form>
</template>

<style scoped lang="scss">
.form__description {
    margin-bottom: 10px;
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
}

.form__textarea {
    width: 100%;
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
        color: var(--color-dark-text);
        background-color: var(--color-accent);
        box-shadow: 0 0 20px var(--color-accent);
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
