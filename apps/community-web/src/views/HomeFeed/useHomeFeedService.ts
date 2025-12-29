import { ref } from 'vue';

export function useHomeFeedService() {
  // 模拟 Story 数据
  const stories = ref(Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `用户 ${i + 1}`,
    avatar: 'https://joeschmoe.io/api/v1/random'
  })));

  // 模拟 Post 数据
  const posts = ref(Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    user: {
      name: `示例用户 ${i + 1}`,
      avatar: 'https://joeschmoe.io/api/v1/random'
    },
    time: '1周',
    image: 'https://picsum.photos/600/600',
    likes: '1.5万',
    caption: '这里是帖子的配文内容，模拟Instagram的排版风格...',
    commentCount: 223
  })));

  return {
    stories,
    posts
  };
}