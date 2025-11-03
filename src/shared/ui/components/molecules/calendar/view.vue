<script setup lang="ts">
import { IconButton } from '../../atoms';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dates = Array.from({ length: 31 }, (_, id) => id + 1);
const today = new Date();
const month = today.toLocaleDateString();
const year = today.getFullYear();

</script>

<template>
    <div class="root">
        <div class="actions">
            <IconButton>◂</IconButton>
            <span class="month-year">{{ month }}</span>
            <span class="month-year">{{ year }}</span>
            <IconButton>▸</IconButton>
        </div>
        <ul class="days">
            <li v-for="day in days">{{ day }}</li>
        </ul>
        <ul class="dates">
            <li class="date" v-for="date in dates">
                <IconButton>{{ date }}</IconButton>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    width: max-content;

    gap: 1rem;
    padding: 1rem;

    border: calc(1rem / 8) solid var(--divider-color);
    border-radius: calc(1rem / 4);
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);    

    >* {
        text-align: center;
        font-size: 0.75rem;
    }
}

.dates {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
}

.date>* {
    width: 100%;
}
</style>