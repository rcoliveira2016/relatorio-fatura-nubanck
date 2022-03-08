import { defineStore } from 'pinia'
import { RelatorioNubankStore } from '@/helpers/relatorio-nubank-helper';
import { IFaturamentoNubank } from '@/model/relatorio-nubank/relatorio-nubank-model';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';

function getCurrencyCellRenderer(params: ValueFormatterParams):string {
  var ptBRFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  
  const valor = params?.data?.valor ?? params.value;
  return ptBRFormatter.format(valor)
}

export const useGridRelatorioNubankStore = defineStore('gridRelatorioNubankStore', {
  state: () => {
    return {
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        sortable: true,
        resizable: true,
      } as ColDef,
      columnDefs: [
        { 
          field: "texto", 
          headerName:"Empresa compra",
          sortable: true,
          filter: 'agTextColumnFilter', 
          width:400, 
          enableRowGroup: true 
        },
        { 
          field: "valor",
          headerName:"Valor",
          sortable: true,
          filter: 'agNumberColumnFilter',
          enableRowGroup: true,
          aggFunc: 'sum',
          valueFormatter: getCurrencyCellRenderer
        },
      ] as ColDef[],
      rowGroupPanelShow: 'always',
      animateRows:true,
      groupIncludeFooter:true,
      groupIncludeTotalFooter: true 
    }
  },
  getters:{
    
  },
  actions:{

  }
})