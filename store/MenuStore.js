import { defineStore } from 'pinia';
import Api from '@/api/Axios';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    headerMenu: []
  }),
  getters: {
    getHeaderMenu: (state) => state.headerMenu,
  },
  actions: {
    async fetchHeaderMenu() {
      if (this.headerMenu.length > 0) return; // Чтобы избежать повторных запросов
      try {
        const result = await Api.get('menu/get_menu_header');
        this.headerMenu = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
