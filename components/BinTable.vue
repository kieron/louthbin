<script setup>
import { format, isToday, isTomorrow } from "date-fns";
import TodayBadge from "./TodayBadge.vue";
import TomorrowBadge from "./TomorrowBadge.vue";
import binData from "~/constants/binData.js";
import NextBadge from "./NextBadge.vue";

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
        class="bg-green-300 px-2 rounded font-extrabold mr-2 py-1 w-content text-xs md:text-md min-w-[110px] text-center"
      >
        {{ format(new Date(day.date), "EEE dd MMM yy") }}
      </div>
      <div class="capitalize font-semibold text-xs md:text-sm">
        {{ day.name }}
      </div>
      <div class="ml-auto md:ml-2 flex flex-row gap-2">
        <NextBadge v-if="index === 0" />
        <TodayBadge v-if="true || isToday(new Date(day.date))" />
        <TomorrowBadge v-if="isTomorrow(new Date(day.date))" />
      </div>
    </div>
  </div>
</template>
