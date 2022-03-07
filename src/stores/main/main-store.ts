import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      abaAtual: 0
    }
  },
})