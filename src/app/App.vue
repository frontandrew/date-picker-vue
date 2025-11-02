<script setup lang="ts">
import Input from "../shared/components/input/Input.vue";
import CalendarIcon from "../shared/icons/calendar/CalendarIcon.vue";
</script>

<template>
    <Input id="date-picker" name="date-picker">
    <template #icon>
        <CalendarIcon />
    </template>
    </Input>
</template>

<style scoped></style>
