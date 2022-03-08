import { IFaturamentoNubank } from "@/model/relatorio-nubank/relatorio-nubank-model";

export class RelatorioNubankStore
{
    public static criarIFaturamentoNubank(nodeTextoRealt: string): IFaturamentoNubank{
        var dados= nodeTextoRealt.split("\t");
        return {
            valor: parseFloat(dados[1].replace("\r", "").split(",").join('.')),
            texto: dados[0]
        }
    }
    public static obterListaIFaturamentoNubank (textoRealt: string): IFaturamentoNubank[]{
        var dados = textoRealt.split('\n');
        return dados
            .filter(x=> x.indexOf("\t")>-1)
            .map(x=> this.criarIFaturamentoNubank(x));
    }
}