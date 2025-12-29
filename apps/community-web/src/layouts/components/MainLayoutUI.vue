<template>
  <a-config-provider>
    <div class="flex min-h-screen bg-white flex-col md:flex-row">
      <!-- 移动端顶部导航 -->
      <slot name="topNav"></slot>

      <!-- 左侧导航 (中大屏显示) -->
      <aside class="hidden md:block w-[72px] xl:w-60 shrink-0 border-r h-screen sticky top-0 overflow-y-auto transition-all duration-300">
        <slot name="sideNav"></slot>
      </aside>
      
      <!-- 中间内容区域 -->
      <div class="flex-1 flex justify-center w-full pb-12 md:pb-0"> <!-- pb-12 for bottom nav -->
        <div class="flex w-full max-w-[1200px] pt-4 px-0 sm:px-4 justify-center gap-x-16">
          <!-- 路由视图 -->
          <main class="w-full max-w-[630px] mx-auto lg:mx-0 transition-all duration-300">
            <slot></slot>
          </main>
          <!-- 右侧面板 (仅大屏显示) -->
          <aside class="hidden lg:block w-[320px] shrink-0 pt-4">
            <slot name="rightPanel"></slot>
          </aside>
        </div>
      </div>

      <!-- 移动端底部导航 -->
      <slot name="bottomNav"></slot>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
</script>