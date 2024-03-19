import {RendaFixa} from './calculoRendaFixa.js'
import { Erro } from './caseError.js';
"use strict"

export default function validarDados(conta){
 let aux = 0;
 aux = conta.valorInicial;



    if(conta.valorInicial < 0){
        Erro.setMSG = "O valor inicial não pode ser menor que zero!";
        return;
    }
    if(conta.valorInicial == NaN){
        Erro.setMSG = "O valor inicial não pode ser nulo! Condição string";
        return;
    }
    
    /*if(!(typeof conta.valorInicial === "number")){
        Erro.setMSG = "O valor inicial não pode ser nulo!";
        return;
    }

    if(conta.porteMensal < 0){
        Erro.setMSG = "O investimento mensal não pode ser menor que zero!";
        return;
    }
    if(!(conta.porteMensal === NaN)){
        Erro.setMSG = "O investimento mensal não pode ser nulo!";
        return;
    }
    
    if(conta.prazo < 0){
        Erro.setMSG = "O prazo não pode ser menor que zero!";
        return;
    }else if(!(conta.prazo === NaN)){
        Erro.setMSG = "O prazo não pode ser nulo!";
        return;
    }

    if(conta.taxa < 0){
        Erro.setMSG = "A taxa não pode ser menor que zero!";
        return;
    }else if(!(conta.taxa === NaN)){
        Erro.setMSG = "O valor da taxa não pode ser nulo!";
        return;
    }*/

    

}