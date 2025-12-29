<template>
  <div class="min-h-screen flex items-center justify-center">
    <a-card title="注册" class="w-[360px]">
      <a-form layout="vertical" @finish="onFinish">
        <a-form-item label="用户名" name="username" :rules="[{ required: true }]">
          <a-input v-model:value="form.username" />
        </a-form-item>
        <a-form-item label="密码" name="password" :rules="[{ required: true }]">
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>注册</a-button>
        </a-form-item>
        <a-form-item>
          <a-button block @click="$router.push('/login')">去登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const form = reactive({ username: '', password: '' });
const auth = useAuthStore();
const router = useRouter();
function onFinish() {
  auth.login(form.username || '新用户');
  router.push('/');
}
</script>

