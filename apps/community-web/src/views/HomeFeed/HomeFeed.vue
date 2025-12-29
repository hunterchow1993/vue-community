<template>
  <StoryRailUI :stories="stories" />
  <div class="space-y-4 pb-6 max-w-[470px] mx-auto">
    <PostItemUI v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import StoryRailUI from './components/StoryRailUI.vue';
import PostItemUI from './components/PostItemUI.vue';
import { useHomeFeedService } from './useHomeFeedService';

const { stories, posts } = useHomeFeedService();
</script>
