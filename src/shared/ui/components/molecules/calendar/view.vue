<script setup lang="ts">
import { computed, reactive } from 'vue';
import { addMonths, format, isValid } from 'date-fns';

import { IconButton } from '../../atoms';
import { getDatesIntervalByDate } from './utils';

const selectedDate = defineModel<Date>('date', { default: new Date() })

const currentMonthDate = reactive({
    value: selectedDate.value,
})

const changeCurrentMonth = (step: number) => {
    currentMonthDate.value = addMonths(currentMonthDate.value, step)
}

const setCurrentMonthDate = ({ target }: Event & { target: { name: string | undefined }}) => {
    
    if (!!target && typeof target.name === 'string' && isValid(new Date(target.name))) {        
        currentMonthDate.value = new Date(target.name)
        selectedDate.value = currentMonthDate.value
    }
}

const calendarDates = computed(() => getDatesIntervalByDate(currentMonthDate.value))
const selectedMonthName = computed(() => format(currentMonthDate.value, 'MMM'));
const selectedYearName = computed(() => currentMonthDate.value.getFullYear());
const weekDaysNames = computed(() => calendarDates.value.slice(0, 7).map((date) => format(date, 'ccc')));

const isSelectedDate = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(selectedDate.value, 'yyyy-MM-dd')
}

const isAnotherMonth = (date: Date) => {
    return format(date, 'MMM') !== selectedMonthName.value;
}

</script>

<template>
    <div class="root">
        <div class="actions">
            <IconButton @click="changeCurrentMonth(-1)">◂</IconButton>
            <span class="month-year">{{ selectedMonthName }}</span>
            <span class="month-year">{{ selectedYearName }}</span>
            <IconButton @click="changeCurrentMonth(1)">▸</IconButton>
        </div>
        <ul class="days grid-row">
            <li v-for="day in weekDaysNames">{{ day }}</li>
        </ul>
        <ul class="dates grid-row">
            <li v-for="date in calendarDates">
                <IconButton
                    :class="{
                        'date-selected': isSelectedDate(date),
                        'date-from-another-month': isAnotherMonth(date),
                    }"
                    :name="format(date, 'yyyy-MM-dd')"
                    @click="setCurrentMonthDate"
                >
                    {{ date.getDate() }}
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