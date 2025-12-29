<template>
  <div class="sticky top-0 bg-white z-10 py-4 border-b mb-4 relative group">
    <!-- Left Scroll Button -->
    <div 
      v-if="showLeft"
      @click="scroll('left')"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition-opacity opacity-90"
    >
      <LeftOutlined class="text-xs text-neutral-600" />
    </div>

    <div ref="scrollContainer" class="flex space-x-4 overflow-x-auto no-scrollbar px-4 scroll-smooth">
      <div v-for="story in stories" :key="story.id" class="flex flex-col items-center space-y-1 min-w-[80px] cursor-pointer">
        <div class="w-[82px] h-[82px] rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
          <div class="bg-white p-[2px] rounded-full w-full h-full flex items-center justify-center">
            <a-avatar :size="74" :src="story.avatar" class="border border-neutral-100" />
          </div>
        </div>
        <span class="text-xs w-[80px] text-center truncate text-neutral-600">{{ story.name }}</span>
      </div>
    </div>

    <!-- Right Scroll Button -->
    <div 
      v-if="showRight"
      @click="scroll('right')"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition-opacity opacity-90"
    >
      <RightOutlined class="text-xs text-neutral-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useScroll } from '@vueuse/core';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

defineProps<{
  stories: Array<{ id: number; name: string; avatar: string }>;
}>();

const scrollContainer = ref<HTMLElement | null>(null);
const { x, arrivedState } = useScroll(scrollContainer, { behavior: 'smooth' });

const showLeft = computed(() => !arrivedState.left);
const showRight = computed(() => !arrivedState.right);

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return;
  const amount = 300;
  if (direction === 'left') {
    scrollContainer.value.scrollBy({ left: -amount, behavior: 'smooth' });
  } else {
    scrollContainer.value.scrollBy({ left: amount, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>