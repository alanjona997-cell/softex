import { Pessoa } from "./pessoa"

class PessoaFisica extends Pessoa {  
    public cpf = String;
    public rg = String;

    construtor(cpf, rg, nome, idade){
        super(nome, idade)
        this.cpf = cpf
        this.rg = rg
    }
    desenvolver(){
        console.log("pessoal e familiar")
    }
    Construir(){
        console.log("relações, formações, etc")
    }


}