<script lang="ts" setup>
// composable
import { format } from 'date-fns'
// meta
definePageMeta({
  layout: 'page',
})
export interface IBinData {
  date: string
  name: string
}
const binData: IBinData[] = [
  {
    date: '2023-06-06',
    name: 'domestic waste'
  },
  {
    date: '2023-06-13',
    name: 'recycling'
  },
  {
    date: '2023-06-20',
    name: 'domestic waste'
  },
  {
    date: '2023-06-27',
    name: 'paper and card'
  },
  {
    date: '2023-07-04',
    name: 'domestic waste'
  },
  {
    date: '2023-07-11',
    name: 'recycling'
  },
  {
    date: '2023-07-18',
    name: 'domestic waste'
  },
  {
    date: '2023-07-25',
    name: 'paper and card'
  },
  {
    date: '2023-08-01',
    name: 'domestic waste'
  },
  {
    date: '2023-08-08',
    name: 'recycling'
  },
  {
    date: '2023-08-15',
    name: 'domestic waste'
  },
  {
    date: '2023-08-22',
    name: 'paper and card'
  },
  {
    date: '2023-08-29',
    name: 'domestic waste'
  },
  {
    date: '2023-09-05',
    name: 'recycling'
  },
  {
    date: '2023-09-12',
    name: 'domestic waste'
  },
  {
    date: '2023-09-19',
    name: 'paper and card'
  },
  {
    date: '2023-09-26',
    name: 'domestic waste'
  },
  {
    date: '2023-10-03',
    name: 'recycling'
  },
  {
    date: '2023-10-10',
    name: 'domestic waste'
  },
  {
    date: '2023-10-17',
    name: 'paper and card'
  },
  {
    date: '2023-10-24',
    name: 'domestic waste'
  },
  {
    date: '2023-10-31',
    name: 'recycling'
  },
  {
    date: '2023-11-07',
    name: 'domestic waste'
  },
  {
    date: '2023-11-14',
    name: 'paper and card'
  },
  {
    date: '2023-11-21',
    name: 'domestic waste'
  },
  {
    date: '2023-11-28',
    name: 'recycling'
  },
  {
    date: '2023-12-05',
    name: 'domestic waste'
  },
  {
    date: '2023-12-12',
    name: 'paper and card'
  },
  {
    date: '2023-12-19',
    name: 'domestic waste'
  },
  {
    date: '2023-12-26',
    name: 'NO COLLECTION'
  },
  {
    date: '2024-01-02',
    name: 'domestic waste && recycling'
  },
  {
    date: '2024-01-09',
    name: 'paper and card'
  },
  {
    date: '2024-01-16',
    name: 'domestic waste'
  },
  {
    date: '2024-01-23',
    name: 'recycling'
  },
  {
    date: '2024-01-30',
    name: 'domestic waste'
  },
  {
    date: '2024-02-06',
    name: 'paper and card'
  },
  {
    date: '2024-02-13',
    name: 'domestic waste'
  },
  {
    date: '2024-02-20',
    name: 'recycling'
  },
  {
    date: '2024-02-27',
    name: 'domestic waste'
  },
  {
    date: '2024-03-05',
    name: 'paper and card'
  },
  {
    date: '2024-03-12',
    name: 'domestic waste'
  },
  {
    date: '2024-03-19',
    name: 'recycling'
  },
  {
    date: '2024-03-26',
    name: 'domestic waste'
  },
];


</script>

<template>
  <PageWrapper class="flex-1 flex">
    <div class="background-overlay">
      <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
      ></div>
      <div
        class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      ></div>
      <div
        class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
      ></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 flex flex-col z-10">
          <div :key="index" v-for="day, index in binData">
              {{format(new Date(day.date), 'dd MMM yyyy')}} - {{day.name}}
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';


html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
