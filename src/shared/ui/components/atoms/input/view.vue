<script setup lang="ts">
import { useTemplateRef } from 'vue';
import type { InputProps } from './type';

const props = defineProps<InputProps>()
const inputElement = useTemplateRef('input');

</script>

<template>
    <div class="root" @click="inputElement!.focus()">
        <label :for="props.id" v-show="props.label">{{ props.label }}</label>
        <div class="container">
            <slot name="left"></slot>
            <input :id="props.id" class="input" :name="props.name" ref="input" :value="props.value" />
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

.input {
    flex-grow: 1;
    padding: calc(1rem / 8);
    line-height: 1rem;
}
</style>