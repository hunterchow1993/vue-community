<template>
  <MainLayoutUI>
    <template #topNav>
      <TopNavUI />
    </template>
    <template #sideNav>
      <SideNavUI
        :selectedKeys="selectedKeys"
        :isAuthenticated="isAuthenticated"
        @navigate="go"
        @logout="handleLogout"
      />
    </template>
    <template #default>
      <router-view />
    </template>
    <template #rightPanel>
      <RightPanelUI :isAuthenticated="isAuthenticated" :username="username" @navigate="go" />
    </template>
    <template #bottomNav>
      <BottomNavUI @navigate="go" />
    </template>
  </MainLayoutUI>
</template>

<script setup lang="ts">
import MainLayoutUI from './components/MainLayoutUI.vue';
import SideNavUI from './components/SideNavUI.vue';
import TopNavUI from './components/TopNavUI.vue';
import BottomNavUI from './components/BottomNavUI.vue';
import RightPanelUI from './components/RightPanelUI.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const auth = useAuthStore();
const { isAuthenticated, username } = storeToRefs(auth);
const router = useRouter();
const route = useRoute();

const selectedKeys = computed(() => [route.name?.toString() ?? 'home']);

function go(path: string) {
  router.push(path);
}

function handleLogout() {
  auth.logout();
  router.push('/login');
}
</script>
