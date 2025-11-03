<script setup lang="ts">
import { ref } from "vue";

import { Input } from "../../atoms/input";
import { Popup } from "../../atoms/pop-up";
import { CalendarIcon } from "../../../icons";

import type { DatePickerProps } from "./type";

const props = withDefaults(defineProps<DatePickerProps>(), {
    value: new Date().toLocaleDateString()
});

const isPickerOpen = ref(true);
const popUpAnchor = ref('--input-anchor');
</script>

<template>
    <div class="container">
        <Input id="date-picker-input" name="date-picker" :value="props.value">
        <template #icon>
            <CalendarIcon />
        </template>
        </Input>
        <Popup :anchor="popUpAnchor" :is-open="isPickerOpen" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;

    >.root {
        anchor-name: v-bind("popUpAnchor");
    }
}
</style>