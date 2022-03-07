import { defineStore } from 'pinia'
import { RelatorioNubankStore } from '@/helpers/relatorio-nubank-helper';
import { IFaturamentoNubank } from '@/model/relatorio-nubank/relatorio-nubank-model';


export const useRelatorioNubankStore = defineStore('relatorioNubankStore', {
  state: () => {
    return {
      textoTabela: ""
    }
  },
  getters:{
      listaFaturamento() : IFaturamentoNubank[]{
        return RelatorioNubankStore.obterListaIFaturamentoNubank(this.textoTabela);
      }
  }
})