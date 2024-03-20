import validarDados from './BLL.js';
import {RendaFixa} from './calculoRendaFixa.js'
import { Erro } from './caseError.js';

$(document).ready(function(){
    $('.money').mask("#.##0,00", {reverse: true});;
  });

let retorno = document.getElementById("retornoDIV");
let btnCalcular = document.getElementById("btnCalcular");

export let contaMes = [];
export let contaValor= [];
export let valorSemTaxa= [];

function ObterInicial(){
    return document.getElementById("valorInicial").value.replace(/\./g, "");
}
function ObterAporteMensal(){
    return document.getElementById("investMes").value.replace(/\./g, "");
}
function ObterPrazo(){
    return document.getElementById("prazoMes").value;
}
function ObterValorTaxa(){
    return document.getElementById("taxaMes").value;
}


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
    }
    else
    {
        /*
        console.log(contaMes);
        console.log(contaValor);
        console.log(valorSemTaxa);
        console.log(valorSemTaxa);
        */
    const ctx = document.getElementById('graficoSaida');

        const data =
        {
            labels: contaMes,
            datasets: 
            [{
              label: 'Rendimento bruto',
              data: contaValor,
              fill: true,
              borderColor: 'rgb(141, 191, 65)',
              tension: 0.1
            },
            {
              label: 'Total investido',
              data: valorSemTaxa,
              fill: true,
              borderColor: 'rgb(229, 62, 80)',
              tension: 0.1
            }]
        };

    new Chart(ctx, {
    type: 'line',
    data: data,
    });

    retorno.innerHTML = `
    <p class="textoResultado">Em <b>${obj1.prazo} meses</b> você teria: <br> <b id="valorResultado">${obj1.Calcular().toFixed(2)}</b></p>

    <p>Total investido: R$<b class="money">${valorSemTaxa[valorSemTaxa.length - 1]}</b></p>
    `;
    
}
}
btnCalcular.addEventListener("click", index);

