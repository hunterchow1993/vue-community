import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    username: '游客' as string,
  }),
  actions: {
    login(name?: string) {
      this.isAuthenticated = true;
      if (name) this.username = name;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '游客';
    },
  },
});

