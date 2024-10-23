<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<template>
<div class="checkbox__switch">
    <label class="checkbox__label">
        <input
            type="checkbox"
            name="theme"
            class="checkbox__input"
            @click="this.$emit('changeTheme')"
        >
        <span class='slider'></span>
    </label>
</div>
</template>

<style scoped lang="scss">
.checkbox__switch {
    position: relative;
    width: 42px;
    height: 24px;
}

.checkbox__label {
    position: absolute;
    width: 42px;
    height: 24px;
    background-color: var(--color-accent);
    border-radius: 50px;
    cursor: pointer;
}

.checkbox__input {
    position: absolute;
    display: none;
}

.slider {
    display: block;
    position: absolute;
    width: 42px;
    height: 24px;
    border-radius: 50px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 10px var(--color-accent);
    }
}

.checkbox__input:checked ~ .slider {
  background-color: var(--color-border);
}

.slider::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  box-shadow: inset 6px -1px 0px 0px var(--color-border);
  background-color: var(--color-accent);
  transition: 0.3s;
}

input:checked ~ .slider::before {
  transform: translateX(18px) translateY(-50%);
  background-color: var(--color-accent);
  box-shadow: none;
}
</style>
