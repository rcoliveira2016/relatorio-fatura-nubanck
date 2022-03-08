<template>
  <div>
    <div class="q-pb-sm">
      <q-btn color="primary" class="q-mr-sm" icon="import_export" label="Exportar excel" @click="onExportarExcel"/>
      <q-btn color="primary" class="" icon="import_export" label="Exportar CSV" @click="onExportarCSV"/>
    </div>
    <div>
      <ag-grid-vue
        style="width: auto; height: 400px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        @grid-ready="onGridReady"
        :defaultColDef="defaultColDef"
        :animateRows="true"
        :groupIncludeFooter="true"
        :groupIncludeTotalFooter="true"
        :rowGroupPanelShow="rowGroupPanelShow"
        :localeText="localeText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRelatorioNubankStore } from "@/stores/relatorio/relatorio-nubank-store";
import { ColDef,  GridApi,  GridReadyEvent, ValueFormatterParams } from "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref } from "vue";
import {localeText} from './locale.pt-BR';

function getCurrencyCellRenderer(params: ValueFormatterParams):string {
  var ptBRFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  console.log(params);
  const valor = params?.data?.valor ?? params.value;
  return ptBRFormatter.format(valor)
}

let gridApi: GridApi;

const columnDefs:ColDef[] = [
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
];
const relatorioNubankStore = useRelatorioNubankStore();
const rowData = ref(relatorioNubankStore.listaFaturamento);
const rowGroupPanelShow = 'always';
const defaultColDef = {
  flex: 1,
  minWidth: 100,
  sortable: true,
  resizable: true,
};
const onGridReady = (params:GridReadyEvent) => {
  gridApi = params.api;
}

const onExportarExcel = () => {
  gridApi.exportDataAsExcel();
}

const onExportarCSV = () => {
  gridApi.exportDataAsCsv();
}
</script>