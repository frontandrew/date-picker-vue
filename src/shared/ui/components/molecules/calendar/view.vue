<script setup lang="ts">
import { computed, onUpdated, ref } from 'vue';
import { format, parse } from 'date-fns';

import { IconButton } from '../../atoms';

import { getDatesIntervalByDate } from './utils';

const dateModel = defineModel<string>('date', { required: true })

const date = computed(() => parse(dateModel.value, 'd.M.y', new Date()))
const calendarDates = computed(() => getDatesIntervalByDate(date.value))
const month = computed(() => format(date.value, 'MMM'));
const year = computed(() => date.value.getFullYear());
const days = computed(() => calendarDates.value.slice(0, 7).map(({ date }) => format(date, 'ccc')));

onUpdated(() => {
    dateModel
    console.log('CALENDAR MODEL:', dateModel.value)
    console.log('CALENDAR DATE:', date.value)
})
</script>

<template>
    <div class="root">
        <div class="actions">
            <IconButton name="prev-month">◂</IconButton>
            <span class="month-year">{{ month }}</span>
            <span class="month-year">{{ year }}</span>
            <IconButton name="next-month">▸</IconButton>
        </div>
        <ul class="days grid-row">
            <li v-for="day in days">{{ day }}</li>
        </ul>
        <ul class="dates grid-row">
            <li v-for="item in calendarDates">
                <IconButton :class="{
                    'date-selected': item.selected,
                    'date-from-another-month': !item.isTargetMonth,
                }" :name="item.date.toISOString()">
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