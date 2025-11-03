<script setup lang="ts"></script>

<template>
    <button class="icon-button">
        <slot>✕</slot>
    </button>
</template>

<style scoped>
.icon-button {
    border-radius: calc(1rem / 8);
    aspect-ratio: 1;

    width: 1.25rem;
    height: 1.25rem;
    line-height: 1rem;

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
}
</style>