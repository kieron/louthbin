<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const app = useAppConfig() as AppConfigInput
const menus = computed((): IMenuItem[] => [
  // {
  //   type: 'button',
  //   text: 'pages.dashboard.nav',
  //   route: { name: 'dashboard' },
  // },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
   <div
        class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500"
      >
        <span class="mr-1">
         sry if its wrong
        </span>
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>

      </div>
    </template>
  </BuilderNavbar>
</template>
