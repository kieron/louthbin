<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'Whoops!',
}))
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <Error :code="404" />
  </PageWrapper>
</template>
