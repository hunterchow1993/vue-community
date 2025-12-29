<template>
  <a-card :bordered="false" class="shadow-sm !rounded-lg overflow-hidden">
    <template #title>
      <div class="flex items-center justify-between py-2">
        <div class="flex items-center space-x-3 cursor-pointer">
          <div class="w-[42px] h-[42px] rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
              <div class="bg-white p-[1.5px] rounded-full w-full h-full flex items-center justify-center">
                <a-avatar :size="32" :src="post.user.avatar" />
              </div>
          </div>
          <span class="font-semibold text-sm">{{ post.user.name }}</span>
          <span class="text-neutral-400 text-xs">• {{ post.time }}</span>
        </div>
        <EllipsisOutlined class="text-xl cursor-pointer" />
      </div>
    </template>
    
    <!-- Post Image -->
    <div class="aspect-square bg-neutral-100 mb-3 -mx-6">
        <img :src="post.image" alt="Post" class="w-full h-full object-cover" />
    </div>

    <!-- Action Icons -->
    <div class="flex justify-between items-center mb-3">
      <div class="flex space-x-4">
        <HeartOutlined class="text-2xl hover:text-neutral-500 cursor-pointer transition-colors" />
        <MessageOutlined class="text-2xl hover:text-neutral-500 cursor-pointer transition-colors" />
        <SendOutlined class="text-2xl hover:text-neutral-500 cursor-pointer transition-colors" />
      </div>
      <BookOutlined class="text-2xl hover:text-neutral-500 cursor-pointer transition-colors" />
    </div>

    <!-- Likes -->
    <div class="font-semibold text-sm mb-2">{{ post.likes }} 次赞</div>

    <!-- Caption -->
    <div class="text-sm">
      <span class="font-semibold mr-2">{{ post.user.name }}</span>
      <span class="text-neutral-800">{{ post.caption }}</span>
    </div>
    
    <!-- View all comments -->
    <div class="text-neutral-500 text-sm mt-1 cursor-pointer">查看全部 {{ post.commentCount }} 条评论</div>
    
    <!-- Input comment -->
    <div class="mt-2 text-xs text-neutral-400">添加评论...</div>
  </a-card>
</template>

<script setup lang="ts">
import { 
  HeartOutlined, 
  MessageOutlined, 
  SendOutlined, 
  BookOutlined,
  EllipsisOutlined 
} from '@ant-design/icons-vue';

defineProps<{
  post: {
    id: number;
    user: { name: string; avatar: string };
    time: string;
    image: string;
    likes: string;
    caption: string;
    commentCount: number;
  }
}>();
</script>

<style scoped>
:deep(.ant-card-head) {
  padding: 0 12px;
  min-height: 56px;
  border-bottom: none;
}
:deep(.ant-card-body) {
  padding: 0 12px 16px 12px;
}
</style>