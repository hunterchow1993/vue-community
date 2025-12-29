<template>
  <div class="h-12 border-t bg-white fixed bottom-0 w-full z-50 md:hidden flex justify-around items-center px-2">
    <HomeOutlined class="text-xl" @click="$emit('navigate', '/')" />
    <CompassOutlined class="text-xl" @click="$emit('navigate', '/explore')" />
    <VideoCameraOutlined class="text-xl" @click="$emit('navigate', '/reels')" />
    <PlusSquareOutlined class="text-xl" @click="$emit('navigate', '/create')" />
    <MessageOutlined class="text-xl" @click="$emit('navigate', '/messages')" />
    <UserOutlined class="text-xl" @click="$emit('navigate', '/profile')" />
  </div>
</template>

<script setup lang="ts">
import {
  HomeOutlined,
  CompassOutlined,
  VideoCameraOutlined,
  PlusSquareOutlined,
  MessageOutlined,
  UserOutlined
} from '@community/ui';

defineEmits<{
  (e: 'navigate', path: string): void;
}>();
</script>