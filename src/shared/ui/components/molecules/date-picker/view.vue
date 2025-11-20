<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";

import { Input, Popup, IconButton } from "../../atoms";
import { CalendarIcon } from "../../../icons";
import { Calendar } from "../calendar";

import type { DatePickerProps, DatePickerValue } from "./type";
// import { isValidValue, getLocaleDateString, getDefaultValue } from "./utils";

import { format, isValid, parse, setDefaultOptions } from "date-fns";
import * as locale from "date-fns/locale";
setDefaultOptions({ locale: locale.enUS })

const count = ref(0)

const props = defineProps<DatePickerProps>();

const isCalendarVisible = ref(false);
const popUpAnchor = `--input-anchor-${props.id}`;
const hasError = ref(props.hasError)

const valueModel = defineModel<DatePickerValue>('value');

const dateModel = computed({
    get() {
        if (valueModel.value && isValid(new Date(valueModel.value))) {
            return parse(valueModel.value, 'yyyy-MM-dd', new Date())
        }

        return new Date();
    },

    set(newValue) {
        valueModel.value = format(newValue, 'yyyy-MM-dd') as DatePickerValue
    }
})

const localeValueModel = ref()
const inputValue = ref()




const toggleCalendar = () => {
    isCalendarVisible.value = !isCalendarVisible.value
}

onMounted(() => {
    inputValue.value = format(valueModel.value as string, 'P')

    count.value++
    console.log('PICKER MOUNTED:', count.value)
    console.log('PICKER MODEL:', valueModel.value)
    console.log('PICKER PROXY:', localeValueModel.value)
    console.log('PICKER STRING:', inputValue.value)
    console.log('PICKER ERROR:', hasError.value)
    // console.log('PICKER DATE:', dateString.value)
})
onUpdated(() => {
    // localeValueModel.value = (inputValue.value)

    count.value++
    console.log('PICKER UPDATED:', count.value)
    console.log('PICKER MODEL:', valueModel.value)
    console.log('PICKER PROXY:', localeValueModel.value)
    console.log('PICKER STRING:', inputValue.value)
    console.log('PICKER ERROR:', hasError.value)
    // console.log('PICKER DATE:', dateString.value)
})

</script>

<template>
    <div class="container">
        <Input class="anchored-input" v-model:value="inputValue" :id="props.id" :name="props.name" :has-error="hasError"
            :placeholder="props.placeholder" :clearable="props.clearable" label="Date">
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
            <Calendar v-model:date="dateModel" />
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