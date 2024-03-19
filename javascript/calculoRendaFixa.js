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

       let resultado = valorInicial_;
        
        for(let i = 0; i < prazo_; i++){
            resultado = (resultado + aporteMensal_) * (1 + taxa_ / 100);
            console.log(resultado);
        }
        
        return resultado;
    }
}