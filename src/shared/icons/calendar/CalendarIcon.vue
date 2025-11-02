<script setup lang="ts">
import { ref } from 'vue';


const props = withDefaults(defineProps<{ color?: string, size?: `${number}rem` }>(), {
    color: 'var(--text-color)',
    size: '1rem',
})

const size = ref(props.size)
const color = ref(props.color)

</script>

<template>
    <svg :width="size" :height="size" focusable="false" viewBox="0.5 1 22 22" :fill="color">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11
            0-1.99.9-1.99 2L3 20c0 1.1.89 2 2
            2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0
            16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4
            0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4
            0h-2v-2h2zm4 0h-2v-2h2z">
        </path>
    </svg>
</template>

<style scoped>
.icon {
    fill: var(--text-color);
    height: 100%;
    max-height: 1rem;
    width: 100%;
    max-width: 1rem;

    path {
        height: 100%;
        width: 100%;
    }
}
</style>