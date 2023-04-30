export class Pessoa {
    public id: number;
    public nome: string;
    public idade: number;

    constructor(id: number, nome: string, idade: number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    };

    getTipo(){
        if(this.idade > 100) return 'idoso'
        else return 'Jovem'
    }
}
