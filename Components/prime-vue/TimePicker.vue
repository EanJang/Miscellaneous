<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedTime"
      :options="timeRange"
      optionLabel="name"
      class="dropdown"
    >
      <template #value="slotProps">
        <div class="selected-slot">
          <Tag :value="slotProps.value.code" class="tag" />
          {{ slotProps.value.name }}
        </div>

        <Calendar
          class="calendar"
          v-if="slotProps.value.code === 'CAL'"
          v-model="date"
          selectionMode="range"
        />
      </template>

      <template #option="slotProps">
        <div class="options-slot">
          <Tag :value="slotProps.option.code" class="tag" />
          {{ slotProps.option.name }}
        </div>
      </template>
    </Dropdown>
  </div>
  <div>SELECTED{{ selectedTime.code }}</div>
  <div>{{ date }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Calendar from "primevue/calendar";

const date = ref();
const selectedTime = ref({ name: "Past 5 Minutes", code: "5M" });
const timeRange = ref([
  { name: "Past 5 Minutes", code: "5M", value: "" },
  { name: "Past 15 Minutes", code: "15M" },
  { name: "Past 30 Minutes", code: "30M" },
  { name: "Past 1 Hour", code: "1H" },
  { name: "Past 4 Hours", code: "4H" },
  { name: "Past 1 Day", code: "1D" },
  { name: "Past 2 Days", code: "2D" },
  { name: "Past 1 Week", code: "1W" },
  { name: "Past 1 Month", code: "1M" },
  { name: "Select from calendar", code: "CAL" },
]);
</script>

<style lang="scss" scoped>
// .dropdown {
//   width: 50%;
// }

.container {
  display: flex;
  flex-direction: row;
}
.selected-slot {
  margin-left: 0.7rem;
}

.tag {
  margin-right: 0.2rem;
}
</style>
