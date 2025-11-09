<script setup lang="ts">
import { computed, onUpdated, reactive } from 'vue';
import { add, addMonths, format, isValid, parse } from 'date-fns';

import { IconButton } from '../../atoms';

import { getDatesIntervalByDate } from './utils';

const dateModel = defineModel<Date>('date', { default: new Date() })

const selectedDate = reactive({
    value: dateModel.value,
})

const changeMonth = (step: number) => {
    selectedDate.value = addMonths(selectedDate.value, step)
}

const setDate = ({ target }: Event & { target: { name: string | undefined }}) => {
    
    if (!!target && typeof target.name === 'string' && isValid(new Date(target.name))) {        
        selectedDate.value = new Date(target.name)
        dateModel.value = selectedDate.value
    }
}

const calendarDates = computed(() => getDatesIntervalByDate(selectedDate.value))
const month = computed(() => format(selectedDate.value, 'MMM'));
const year = computed(() => selectedDate.value.getFullYear());
const days = computed(() => calendarDates.value.slice(0, 7).map(({ date }) => format(date, 'ccc')));

onUpdated(() => {
    console.log('CALENDAR MODEL:', selectedDate.value)
    console.log('CALENDAR DATE:', selectedDate.value)
})
</script>

<template>
    <div class="root">
        <div class="actions">
            <IconButton name="prev-month" @click="changeMonth(-1)">◂</IconButton>
            <span class="month-year">{{ month }}</span>
            <span class="month-year">{{ year }}</span>
            <IconButton name="next-month" @click="changeMonth(1)">▸</IconButton>
        </div>
        <ul class="days grid-row">
            <li v-for="day in days">{{ day }}</li>
        </ul>
        <ul class="dates grid-row">
            <li v-for="item in calendarDates">
                <IconButton
                    :class="{
                        'date-selected': item.selected,
                        'date-from-another-month': !item.isTargetMonth,
                    }"
                    :name="format(item.date, 'yyyy-MM-dd')"
                    @click="setDate"
                >
                    {{ item.date.getDate() }}
                </IconButton>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.root {
    --density: 1rem;

    display: flex;
    flex-direction: column;
    width: max-content;

    gap: var(--density);
    padding: var(--density);

    border: calc(1rem / 8) solid var(--divider-color);
    border-radius: calc(1rem / 4);
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid-row {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: calc(var(--density) / 2);
}

.days * {
    text-align: center;
    font-size: 0.75rem;
}

.dates * {
    width: 100%;
}

.date-selected {
    background: var(--accent-color);
}

.date-from-another-month {
    color: hsl(from var(--text-color) h s calc(l - 50))
}
</style>