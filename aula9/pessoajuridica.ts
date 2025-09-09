import { Pessoa } from "./pessoa";

class PessoaJurifica extends Pessoa{
    public cnpj : string;
    public contratosocial : string;

    constructor(cnpj, contratosocial, nome, idade){
        super(nome, idade)
        this.cnpj = cnpj
        this.contratosocial = contratosocial
    }
    produzir(){
        console.log("para retorno financeiro")
    }
    construir(){
        console.log("bens e patrimônio")
    }
}