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
        :animateRows="animateRows"
        :groupIncludeFooter="groupIncludeFooter"
        :groupIncludeTotalFooter="groupIncludeTotalFooter"
        :rowGroupPanelShow="rowGroupPanelShow"
        :localeText="localeText"        
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGridRelatorioNubankStore } from "@/stores/relatorio/grid-nubank-store";
import { useRelatorioNubankStore } from "@/stores/relatorio/relatorio-nubank-store";
import { GridApi,  GridReadyEvent } from "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { localeText } from './locale.pt-BR';

const relatorioNubankStore = useRelatorioNubankStore();
const gridRelatorioNubankStore = useGridRelatorioNubankStore();

let gridApi: GridApi;

const rowData = ref(relatorioNubankStore.listaFaturamento);

const { 
  columnDefs,
  animateRows,
  defaultColDef,
  rowGroupPanelShow, 
  groupIncludeFooter, 
  groupIncludeTotalFooter 
} = storeToRefs(gridRelatorioNubankStore)

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