<script setup lang="ts">
import { onUpdated } from 'vue';
import type { InputProps } from './type';

const props = defineProps<InputProps>();
const value = defineModel('value');

onUpdated(() => {
    console.log('INPUT VALUE:', value.value)
})


</script>

<template>
    <div class="root">
        <label :class="{ 'invalid': props.hasError }" :for="props.id" v-show="props.label">{{ props.label }}</label>
        <div :class="{ 'container': true, 'invalid': props.hasError }">
            <slot name="left"></slot>
            <input :id="props.id" class="input" :name="props.name" v-model="value" :placeholder="props.placeholder" />
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    width: 100%;

    &:focus-within {
        color: var(--accent-color);
    }
}

.container {
    display: flex;
    align-items: center;

    width: 100%;

    padding: 0.25rem 0.5rem;
    gap: 0.5rem;

    border: calc(1rem / 8) solid var(--divider-color);
    border-radius: calc(1rem / 4);

    &:focus-within {
        border-color: var(--accent-color);
    }
}

.invalid {
    border-color: var(--error-color);
    color: var(--error-color);
    &:focus-within {
        border-color: var(--error-color);
    }
}

.input {
    flex-grow: 1;
    padding: calc(1rem / 16);
    line-height: 1rem;
}

.input-error {}

.input::placeholder {
    color: hsl(from var(--text-color) h s calc(l - 50));
}
</style>