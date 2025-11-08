<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, useId } from "vue";

import { Input, Popup, IconButton } from "../../atoms";
import { CalendarIcon } from "../../../icons";
import { Calendar } from "../calendar";

import type { DatePickerProps } from "./type";
import { format } from "date-fns";

const props = defineProps<DatePickerProps>();

const count = ref(0)

const valueString = defineModel<string>('value', { default: format(Date(), 'y-M-d') });

const dateString = ref(format(valueString.value, 'd.M.y'))

const toggleCalendar = () => {
    isCalendarVisible.value = !isCalendarVisible.value
}

onMounted(() => {
    count.value++
    console.log('MOUNTED:', count.value)
    console.log('PICKER MODEL:', valueString.value)
    console.log('PICKER STRING:', dateString.value)
})
onUpdated(() => {
    count.value++
    valueString.value = format(dateString.value, 'y-M-d')
    console.log('UPDATED:', count.value)
    console.log('PICKER MODEL:', valueString.value)
    console.log('PICKER STRING:', dateString.value)
})

const isCalendarVisible = ref(false);
const popUpAnchor = `--input-anchor-${props.id}`;
</script>

<template>
    <div class="container">
        <Input
            class="anchored-input"
            v-model:value="dateString"
            :id="props.id"
            :name="props.name"
            :placeholder="props.placeholder"
            :clearable="props.clearable"
        >
            <template #left>
                <IconButton @click="toggleCalendar">
                    <CalendarIcon />
                </IconButton>
            </template>
            <template #right>
                <IconButton />
            </template>
        </Input>
        <Popup :anchor="popUpAnchor" :is-open="isCalendarVisible">
            <Calendar v-model:date="dateString" />
        </Popup>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
}

.anchored-input {
    anchor-name: v-bind("popUpAnchor");
}
</style>