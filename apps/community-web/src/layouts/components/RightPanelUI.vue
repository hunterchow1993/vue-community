<template>
  <div class="p-4">
    <template v-if="isAuthenticated">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <a-avatar size="large">H</a-avatar>
          <div>
            <div class="font-medium">{{ username }}</div>
            <div class="text-neutral-500 text-sm">为你推荐</div>
          </div>
        </div>
        <a-button type="link">切换</a-button>
      </div>
      <div class="text-neutral-500 text-sm mb-2">推荐用户</div>
      <div class="space-y-3">
        <div v-for="n in 5" :key="n" class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <a-avatar size="small">{{ n }}</a-avatar>
            <div>
              <div class="font-medium">示例用户 {{ n }}</div>
              <div class="text-neutral-500 text-xs">建议关注</div>
            </div>
          </div>
          <a-button type="link">关注</a-button>
        </div>
      </div>
      <div class="mt-6 text-neutral-400 text-xs">
        © 2025 COMMUNITY
      </div>
    </template>
    <template v-else>
      <a-card :bordered="false" class="mb-4">
        <div class="flex items-center space-x-3">
          <a-avatar size="large">C</a-avatar>
          <div>
            <div class="font-medium">欢迎来到 Community</div>
            <div class="text-neutral-500 text-sm">请登录或注册</div>
          </div>
        </div>
      </a-card>
      <div class="flex space-x-3">
        <a-button type="primary" block @click="$emit('navigate', '/login')">登录</a-button>
        <a-button block @click="$emit('navigate', '/register')">注册</a-button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isAuthenticated: boolean;
  username: string;
}>();

defineEmits<{
  (e: 'navigate', path: string): void;
}>();
</script>