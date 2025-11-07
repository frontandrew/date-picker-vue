<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'date-fns';

import { IconButton } from '../../atoms';

import type { CalendarProps } from './type';
import { getDatesIntervalByDate } from './utils';

const props = defineProps<CalendarProps>()

const calendarDates = ref(getDatesIntervalByDate(props.date))
const month = format(props.date, 'MMM');
const year = props.date.getFullYear();
const days = calendarDates.value.slice(0, 7).map(({ date }) => format(date, 'ccc'))
</script>

<template>
    <div class="root">
        <div class="actions">
            <IconButton>◂</IconButton>
            <span class="month-year">{{ month }}</span>
            <span class="month-year">{{ year }}</span>
            <IconButton>▸</IconButton>
        </div>
        <ul class="days grid-row">
            <li v-for="day in days">{{ day }}</li>
        </ul>
        <ul class="dates grid-row">
            <li v-for="item in calendarDates">
                <IconButton :class="{
                    'date-selected': item.selected,
                    'date-from-another-month': !item.isTargetMonth,
                }">
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