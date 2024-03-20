import validarDados from './BLL.js';
import {RendaFixa} from './calculoRendaFixa.js'
import { Erro } from './caseError.js';

$(document).ready(function(){
    $('.money').mask("#.##0,00", {reverse: true});;
    $('.Rmoney').mask("#.##0,00", {reverse: true});;
    $('.Tmoney').mask("#.##0,00", {reverse: true});;
  });

let retorno = document.getElementById("retornoDIV");
let btnCalcular = document.getElementById("btnCalcular");

export let contaMes = [];
export let contaValor= [];
export let valorSemTaxa= [];

function ObterInicial(){
    return document.getElementById("valorInicial").value.replace(/\./g, "").replace(/\,/g, ".");
}
function ObterAporteMensal(){
    return document.getElementById("investMes").value.replace(/\./g, "").replace(/\,/g, ".");
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

    if(Erro.TemErro == true){
        alert(`${Erro.getMSG}`);
    }
    else
    {

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
    <p class="textoResultado">Em <b>${obj1.prazo} meses</b> você teria: <div class="valorResultado">R$ <span class="Rmoney"> ${obj1.Calcular().toFixed(2)}</span></div></p>

    <p>Total investido: <span class="textoTotalInvestido ">R$ <span class="Tmoney">${valorSemTaxa[valorSemTaxa.length - 1]}</span></span></p>
    `;
    
}
}
btnCalcular.addEventListener("click", index);

