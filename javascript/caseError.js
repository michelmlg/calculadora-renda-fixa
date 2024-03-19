export class Erro{
    static mensagem;
    static TemErro;
    
    static set setMSG(msg){
        this.mensagem = msg; 
        this.TemErro = true;
    }
    static get getMSG(){
        return this.mensagem;
        
    }

}