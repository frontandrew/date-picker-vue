<script setup lang="ts">
import { ref } from "vue";

import { Input, Popup, IconButton } from "../../atoms";
import { CalendarIcon } from "../../../icons";
import { Calendar } from "../calendar"

import type { DatePickerProps } from "./type";

const props = withDefaults(defineProps<DatePickerProps>(), {
    value: new Date().toLocaleDateString()
});

const isCalendarVisible = ref(false);
const popUpAnchor = ref('--input-anchor');
</script>

<template>
    <div class="container" @focusout="isCalendarVisible = false">
        <Input id="date-picker-input" name="date-picker" :value="props.value">
        <template #left>
            <IconButton @click="isCalendarVisible = !isCalendarVisible">
                <CalendarIcon />
            </IconButton>
        </template>
        <template #right>
            <IconButton />
        </template>
        </Input>
        <Popup :anchor="popUpAnchor" :is-open="isCalendarVisible">
            <Calendar />
        </Popup>
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