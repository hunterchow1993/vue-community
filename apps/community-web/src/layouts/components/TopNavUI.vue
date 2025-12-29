<template>
  <div class="h-14 px-4 flex items-center justify-between border-b bg-white sticky top-0 z-50 md:hidden">
    <div class="text-xl font-bold">Community</div>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <a-input-search placeholder="搜索" class="w-48 hidden sm:block" />
        <SearchOutlined class="text-xl sm:hidden" />
      </div>
      <HeartOutlined class="text-xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined, HeartOutlined } from '@community/ui';
</script>