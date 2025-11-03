<script setup lang="ts">
import type { PopupProps } from './type';

const props = defineProps<PopupProps>()

</script>

<template>
    <Teleport to="#app">
        <div v-if="isOpen" class="pop-up">
            <slot name="header"></slot>
            <slot></slot>
            <slot name="footer">
                <button @click="isOpen = false">Закрыть</button>
            </slot>
        </div>
    </Teleport>
</template>

<style scoped>
.pop-up {
    background-color: burlywood;
    position: absolute;
    justify-self: anchor-center;
    
    position-anchor: v-bind("props.anchor");
    top: calc(anchor(bottom) + 1.25rem);
}
</style>