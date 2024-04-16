<script setup>
import { format, isToday, isTomorrow, isTuesday } from "date-fns";

const binData = [
  { date: "2024-04-02", name: "paper and card" },
  { date: "2024-04-09", name: "domestic waste" },
  { date: "2024-04-16", name: "recycling" },
  { date: "2024-04-23", name: "domestic waste" },
  { date: "2024-04-30", name: "paper and card" },
  { date: "2024-05-07", name: "domestic waste" },
  { date: "2024-05-14", name: "recycling" },
  { date: "2024-05-21", name: "domestic waste" },
  { date: "2024-05-28", name: "paper and card" },
  { date: "2024-06-04", name: "domestic waste" },
  { date: "2024-06-11", name: "recycling" },
  { date: "2024-06-18", name: "domestic waste" },
  { date: "2024-06-25", name: "paper and card" },
  { date: "2024-07-02", name: "domestic waste" },
  { date: "2024-07-09", name: "recycling" },
  { date: "2024-07-16", name: "domestic waste" },
  { date: "2024-07-23", name: "paper and card" },
  { date: "2024-07-30", name: "domestic waste" },
  { date: "2024-08-06", name: "recycling" },
  { date: "2024-08-13", name: "domestic waste" },
  { date: "2024-08-20", name: "paper and card" },
  { date: "2024-08-27", name: "domestic waste" },
  { date: "2024-09-03", name: "recycling" },
  { date: "2024-09-10", name: "domestic waste" },
  { date: "2024-09-17", name: "paper and card" },
  { date: "2024-09-24", name: "domestic waste" },
  { date: "2024-10-01", name: "recycling" },
  { date: "2024-10-08", name: "domestic waste" },
  { date: "2024-10-15", name: "paper and card" },
  { date: "2024-10-22", name: "domestic waste" },
  { date: "2024-10-29", name: "recycling" },
  { date: "2024-11-05", name: "domestic waste" },
  { date: "2024-11-12", name: "paper and card" },
  { date: "2024-11-19", name: "domestic waste" },
  { date: "2024-11-26", name: "recycling" },
  { date: "2024-12-03", name: "domestic waste" },
  { date: "2024-12-10", name: "paper and card" },
  { date: "2024-12-17", name: "domestic waste" },
  { date: "2024-12-24", name: "recycling" },
  { date: "2024-12-31", name: "domestic waste" },
  { date: "2025-01-07", name: "paper and card" },
  { date: "2025-01-14", name: "domestic waste" },
  { date: "2025-01-21", name: "recycling" },
  { date: "2025-01-28", name: "domestic waste" },
  { date: "2025-02-04", name: "paper and card" },
  { date: "2025-02-11", name: "domestic waste" },
  { date: "2025-02-18", name: "recycling" },
  { date: "2025-02-25", name: "domestic waste" },
  { date: "2025-03-04", name: "paper and card" },
  { date: "2025-03-11", name: "domestic waste" },
  { date: "2025-03-18", name: "recycling" },
  { date: "2025-03-25", name: "domestic waste" },
];

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

      <div
        v-if="isToday(new Date(day.date))"
        class="bg-red-300 p-1 rounded font-bold ml-auto text-sm md:text-md"
      >
        Today!
      </div>
      <div
        v-if="isTomorrow(new Date(day.date))"
        class="bg-red-300 p-1 rounded font-bold ml-auto text-sm md:text-md"
      >
        Tomorrow!
      </div>
    </div>
  </div>
</template>
