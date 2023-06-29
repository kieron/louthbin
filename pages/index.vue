<script lang="ts" setup>
import { format, isToday, isTomorrow, isTuesday } from 'date-fns'

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
]

const currentBinData = binData.filter((bin) => {
  return new Date(bin.date) > new Date()
})

</script>

<template>
  <PageWrapper class="flex-1 flex">

    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 flex flex-col space-y-1">
          <div :key="index" v-for="day, index in currentBinData" class="bg-green-200 rounded text-gray-900 h-12 flex items-center px-5 w-full">
              <div class="bg-green-300 px-3 rounded font-extrabold mr-2">{{format(new Date(day.date), 'dd MMM yyyy')}}</div>
              <div class="capitalize font-semibold text-sm">{{day.name}}</div>
              <div v-if="isToday(new Date(day.date))" class="bg-red px-2 rounded font-extrabold ml-auto">
                Today!
              </div>
              <div v-if="isTomorrow(new Date(day.date))" class="bg-red px-2 rounded font-extrabold ml-auto">
                Tomorrow!
              </div>
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
