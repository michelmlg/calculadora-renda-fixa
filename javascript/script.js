import validarDados from './BLL.js';
import {RendaFixa} from './calculoRendaFixa.js'
import { Erro } from './caseError.js';



let retorno = document.getElementById("retornoDIV");
let btnCalcular = document.getElementById("btnCalcular");

function ObterInicial(){
    return document.getElementById("valorInicial").value;
}
function ObterAporteMensal(){
    return document.getElementById("investMes").value;
}
function ObterPrazo(){
    return document.getElementById("prazoMes").value;
}
function ObterValorTaxa(){
    return document.getElementById("taxaMes").value;
}

export let contaMes = [];
export let contaValor= [];

function index(){
    let obj1 = new RendaFixa( ObterInicial(),
                            ObterAporteMensal(),
                            ObterPrazo(),
                            ObterValorTaxa());

    Erro.TemErro = false;
    validarDados(obj1);
    
    console.log(Erro.getMSG, ObterInicial(),typeof obj1.valorInicial, obj1.valorInicial);

    if(Erro.TemErro == true){
        alert(`${Erro.getMSG}`);
    }else{
        const ctx = document.getElementById('graficoSaida');

        const data = {
            labels: contaMes,
            datasets: [{
              label: 'Rentabilidade',
              data: contaValor,
              fill: true,
              borderColor: 'rgb(76,175,80)',
              tension: 0.1
            }]
          };

    new Chart(ctx, {
    type: 'line',
    data: data,
    });

    retorno.innerHTML = `<p>O resultado é R$${obj1.Calcular().toFixed(2)}</p>`;
    }
}
btnCalcular.addEventListener("click", index);

