<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { storeToRefs } from 'pinia';
import { useRelatorioNubankStore } from "@/stores/relatorio/relatorio-nubank-store"

const relatorioNubankStore = useRelatorioNubankStore();

const { textoTabela } = storeToRefs(relatorioNubankStore)

</script>

<template>
  <div class="fit row">
    <q-card class="card-w-100">
      <q-card-section>
        <q-input
            v-model="textoTabela"
            filled
            type="textarea"
            label="Colar fatura"
            />
      </q-card-section>
    </q-card>  
  </div>  
</template>

