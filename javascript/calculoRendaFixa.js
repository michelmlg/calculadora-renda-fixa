import {contaMes} from './script.js'
import {contaValor} from './script.js'
import {valorSemTaxa} from './script.js'

export class RendaFixa{
    
    constructor(valorInicial, aporteMensal, prazo, taxa){
        this.valorInicial = parseFloat(valorInicial);
        this.aporteMensal = parseFloat(aporteMensal);
        this.prazo = parseInt(prazo);
        this.taxa = parseFloat(taxa);
    }
    
    Calcular(){
        const valorInicial_ = this.valorInicial;
        const aporteMensal_ = this.aporteMensal;
        const prazo_ = this.prazo;
        const taxa_ = this.taxa;
        let soma = valorInicial_;
        let resultado = valorInicial_;
        

        for(let i = 0; i < prazo_; i++){

            //Calcula valor total do rendimento e o valor aplicado
            resultado = (resultado * (1+ taxa_)) + aporteMensal_;
            soma += aporteMensal_;
            
            //Recebe valores tabela
            contaMes[i] = i;
            contaValor[i] = resultado.toFixed(2);
            valorSemTaxa[i] = soma.toFixed(2);
        }
        
        return resultado;
    }
}