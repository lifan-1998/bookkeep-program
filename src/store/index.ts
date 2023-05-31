import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      // token
      token: '',
      // 用户信息
      userInfo: {}
    }
  },
  setters: {},
  getters: {},
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['token', 'userInfo']
      }
    ]
  }
})