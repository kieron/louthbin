<script setup>
import { format, isToday, isTomorrow } from "date-fns";
import TodayBadge from "./TodayBadge.vue";
import TomorrowBadge from "./TomorrowBadge.vue";
import binData from "~/constants/binData.js";

const currentBinData = binData.filter((bin) => {
  return new Date(bin.date) > new Date();
});
</script>

<template>
  <div class="flex-1 flex flex-col space-y-1 p-2 bg-gray-900">
    <div
      :key="index"
      v-for="(day, index) in currentBinData"
      class="bg-green-200 rounded text-gray-900 h-11 flex items-center px-1 w-full"
    >
      <div
        class="bg-green-300 px-2 rounded font-extrabold mr-2 py-1 w-content text-xs md:text-md"
      >
        {{ format(new Date(day.date), "EEE dd MMM yy") }}
      </div>
      <div class="capitalize font-semibold text-xs md:text-sm">
        {{ day.name }}
        <span
          v-if="index === 0"
          class="bg-green-400 ml-2 p-1 rounded font-bold ml-auto text-xs md:text-sm md:ml-4"
        >
          Next Bin!
        </span>
      </div>

      <TodayBadge v-if="isToday(new Date(day.date))" />
      <TomorrowBadge v-if="isTomorrow(new Date(day.date))" />
    </div>
  </div>
</template>
