<script setup lang="ts">
import type { PopupProps } from './type';

const props = defineProps<PopupProps>()

</script>

<template>
    <Teleport to="#app">
        <div v-if="isOpen" class="pop-up">
            <slot name="header"></slot>
            <slot></slot>
            <slot name="footer"></slot>
        </div>
    </Teleport>
</template>

<style scoped>
.pop-up {
    position: absolute;
    justify-self: anchor-center;
    
    position-anchor: v-bind("props.anchor");
    top: calc(anchor(bottom) + 0.25rem);
}
</style>