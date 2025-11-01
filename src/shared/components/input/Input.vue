<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)


</script>

<template>
    <div class="container">
        <input class="input" @focusin="open = true" @focusout="open = false" />
        <Teleport to="body">
            <div v-if="open" class="modal">
                <p>Привет из модального окна!</p>
                <button @click="open = false">Закрыть</button>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.input {
    anchor-name: --input;
}

.modal {
    position: absolute;
    position-anchor: --input;
    top: anchor(bottom);
    justify-self: anchor-center;
}
</style>