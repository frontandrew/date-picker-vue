<script setup lang="ts">
import { useSlots, useTemplateRef } from 'vue';
import type { InputProps } from './type';

const props = defineProps<InputProps>()
const inputElement = useTemplateRef('input');

const { icon } = useSlots();

</script>

<template>
    <div class="root" @click="inputElement!.focus()">
        <label :for="props.id" v-show="props.label">{{ props.label }}</label>
        <div class="container">
            <button class="action" v-show="icon">
                <slot name="icon"></slot>
            </button>
            <input :id="props.id" class="input" :name="props.name" ref="input" :value="props.value" />
            <button class="action" v-show="true" @click="inputElement!.value = ''">
                <i>✕</i>
            </button>
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

.action {
    border-radius: calc(1rem / 8);
    padding: calc(1rem / 8);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:focus,
    &:focus-visible,
    &:hover {
        background-color: var(--accent-color);
    }

    &:active {
        background-color: hsl(from var(--accent-color) h s calc(l - 10));
    }

    i {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
    }
}
</style>