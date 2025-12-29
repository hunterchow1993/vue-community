<template>
  <div class="p-3 xl:p-4 space-y-2 h-full flex flex-col">
    <!-- 大屏显示文字 Logo -->
    <div class="hidden xl:block text-3xl font-bold mb-6 px-4 pt-2">Community</div>
    <!-- 小屏显示图标 Logo (Instagram 图标作为示例) -->
    <div class="block xl:hidden mb-6 flex justify-center pt-2">
      <div class="w-12 flex justify-center items-center"> <!-- 增加容器控制宽度 -->
        <InstagramOutlined class="text-3xl" />
      </div>
    </div>

    <!-- 主菜单区域 -->
    <div class="flex-1">
      <a-menu mode="inline" :selectedKeys="selectedKeys" class="!border-e-0 text-lg">
        <a-menu-item key="home" @click="$emit('navigate', '/')">
          <template #icon><HomeOutlined /></template>
          <span class="hidden xl:inline">首页</span>
        </a-menu-item>

        <a-menu-item key="search" @click="$emit('navigate', '/search')">
          <template #icon><SearchOutlined /></template>
          <span class="hidden xl:inline">搜索</span>
        </a-menu-item>
        <a-menu-item key="explore" @click="$emit('navigate', '/explore')">
          <template #icon><CompassOutlined /></template>
          <span class="hidden xl:inline">探索</span>
        </a-menu-item>
        <a-menu-item key="reels" @click="$emit('navigate', '/reels')">
          <template #icon><VideoCameraOutlined /></template>
          <span class="hidden xl:inline">Reels</span>
        </a-menu-item>
        <a-menu-item key="messages" @click="$emit('navigate', '/messages')">
          <template #icon><MessageOutlined /></template>
          <span class="hidden xl:inline">消息</span>
        </a-menu-item>
        <a-menu-item key="notifications" @click="$emit('navigate', '/notifications')">
          <template #icon><HeartOutlined /></template>
          <span class="hidden xl:inline">通知</span>
        </a-menu-item>
        <a-menu-item key="create" @click="$emit('navigate', '/create')">
          <template #icon><PlusSquareOutlined /></template>
          <span class="hidden xl:inline">创建</span>
        </a-menu-item>
        <a-menu-item key="profile" @click="$emit('navigate', '/profile')">
          <template #icon><UserOutlined /></template>
          <span class="hidden xl:inline">主页</span>
        </a-menu-item>
      </a-menu>
    </div>

    <!-- 底部更多菜单 -->
    <div class="mt-auto">
      <a-menu mode="inline" :selectedKeys="[]" class="!border-e-0 text-lg">
        <a-dropdown :trigger="['click']" placement="topLeft">
          <a-menu-item key="more">
            <template #icon><MenuOutlined /></template>
            <span class="hidden xl:inline">更多</span>
          </a-menu-item>
          <template #overlay>
            <a-menu class="w-64 rounded-xl shadow-xl p-2">
              <template v-if="isAuthenticated">
                <a-menu-item key="switch" class="h-12 flex items-center rounded-lg text-base">
                  <template #icon><UserOutlined /></template>
                  <span>切换账户</span>
                </a-menu-item>
                <a-menu-divider class="my-1" />
                <a-menu-item key="logout" @click="$emit('logout')" class="h-12 flex items-center rounded-lg text-base">
                  <span>退出登录</span>
                </a-menu-item>
              </template>
              <template v-else>
                <a-menu-item key="login" @click="$emit('navigate', '/login')" class="h-12 flex items-center rounded-lg text-base">
                  <span>登录</span>
                </a-menu-item>
                <a-menu-item key="register" @click="$emit('navigate', '/register')" class="h-12 flex items-center rounded-lg text-base">
                  <span>注册</span>
                </a-menu-item>
              </template>
            </a-menu>
          </template>
        </a-dropdown>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  HeartOutlined,
  PlusSquareOutlined,
  UserOutlined,
  MenuOutlined,
  InstagramOutlined
} from '@community/ui';

defineProps<{
  selectedKeys: string[];
  isAuthenticated: boolean;
}>();

defineEmits<{
  (e: 'navigate', path: string): void;
  (e: 'logout'): void;
}>();
</script>

<style lang="less" scoped>
:deep(.ant-menu-item) {
  height: 48px !important;
  margin-bottom: 8px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 8px !important;
  padding: 0 !important;
  width: 48px !important;
  margin: 0 auto 8px auto !important;

  .anticon {
    font-size: 24px !important;
    min-width: 24px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100% !important;
    transform: translateY(2px);
  }

  .ant-menu-title-content {
    display: none;
  }
}

@media (min-width: 1280px) {
  :deep(.ant-menu-item) {
    height: 56px !important;
    width: 100% !important;
    justify-content: flex-start !important;
    padding-left: 16px !important;

    .ant-menu-title-content {
      display: block;
      font-size: 18px !important;
      margin-left: 16px !important;
      font-weight: 500;
      opacity: 1;
      transition: opacity 0.2s;
    }
  }
}
</style>
