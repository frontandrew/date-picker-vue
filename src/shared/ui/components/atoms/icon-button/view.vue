<script setup lang="ts"></script>

<template>
    <button class="icon-button">
        <slot>
            <i>✕</i>
        </slot>
    </button>
</template>

<style scoped>
.icon-button {
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

    >i {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
    }
}
</style>