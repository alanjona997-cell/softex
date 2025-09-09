export class Pessoa{
    public nome : string;
    public idade : number;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    
    criar(){
        console.log("produzir")

    }
    controlar(){
        console.log("controle")

    }

}