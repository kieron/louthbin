<script lang="ts" setup>
// composable

// meta
definePageMeta({
  layout: 'page',
})

const binData = [
  {
    date: '06-06-2023',
    name: 'domestic waste'
  },
  {
    date: '13-06-2023',
    name: 'recycling'
  },
  {
    date: '20-06-2023',
    name: 'domestic waste'
  },
  {
    date: '27-06-2023',
    name: 'paper and card'
  },
  {
    date: '04-07-2023',
    name: 'domestic waste'
  },
  {
    date: '11-07-2023',
    name: 'recycling'
  },
  {
    date: '18-07-2023',
    name: 'domestic waste'
  },
  {
    date: '25-07-2023',
    name: 'paper and card'
  },
  {
    date: '01-08-2023',
    name: 'domestic waste'
  },
  {
    date: '08-08-2023',
    name: 'recycling'
  },
  {
    date: '15-08-2023',
    name: 'domestic waste'
  },
  {
    date: '22-08-2023',
    name: 'paper and card'
  },
  {
    date: '29-08-2023',
    name: 'domestic waste'
  },
  {
    date: '05-09-2023',
    name: 'recycling'
  },
  {
    date: '12-09-2023',
    name: 'domestic waste'
  },
  {
    date: '19-09-2023',
    name: 'paper and card'
  },
  {
    date: '26-09-2023',
    name: 'domestic waste'
  },
  {
    date: '03-10-2023',
    name: 'recycling'
  },
  {
    date: '10-10-2023',
    name: 'domestic waste'
  },
  {
    date: '17-10-2023',
    name: 'paper and card'
  },
  {
    date: '24-10-2023',
    name: 'domestic waste'
  },
  {
    date: '31-10-2023',
    name: 'recycling'
  },
  {
    date: '07-11-2023',
    name: 'domestic waste'
  },
  {
    date: '14-11-2023',
    name: 'paper and card'
  },
  {
    date: '21-11-2023',
    name: 'domestic waste'
  },
  {
    date: '28-11-2023',
    name: 'recycling'
  },
  {
    date: '05-12-2023',
    name: 'domestic waste'
  },
  {
    date: '12-12-2023',
    name: 'paper and card'
  },
  {
    date: '19-12-2023',
    name: 'domestic waste'
  },
  {
    date: '26-12-2023',
    name: 'NO COLLECTION'
  },
  {
    date: '02-01-2024',
    name: 'domestic waste && recycling'
  },
  {
    date: '09-01-2024',
    name: 'paper and card'
  },
  {
    date: '16-01-2024',
    name: 'domestic waste'
  },
  {
    date: '23-01-2024',
    name: 'recycling'
  },
  {
    date: '30-01-2024',
    name: 'domestic waste'
  },
  {
    date: '06-02-2024',
    name: 'paper and card'
  },
  {
    date: '13-02-2024',
    name: 'domestic waste'
  },
  {
    date: '20-02-2024',
    name: 'recycling'
  },
  {
    date: '27-02-2024',
    name: 'domestic waste'
  },
  {
    date: '05-03-2024',
    name: 'paper and card'
  },
  {
    date: '12-03-2024',
    name: 'domestic waste'
  },
  {
    date: '19-03-2024',
    name: 'recycling'
  },
  {
    date: '26-03-2024',
    name: 'domestic waste'
  },
]

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
        <div class="flex-1 md:w-5/8 flex flex-col z-10">
          <h1 class="text-center md:text-left mt-4">
            <span
              class="animated-text-bg drop-shadow-xl text-4xl xl:text-5xl 2xl:text-6xl block font-black uppercase"
            >
              <span class="">wat bin</span>
              {{binData}}
            </span>
          </h1>
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
