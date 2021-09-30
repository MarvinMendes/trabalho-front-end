

export class Aluno {

    _id: number;
    _nome: string;
    _numero: string;
    _email: string;


    constructor(id: number, nome: string, numero: string, email: string) {
        this._id = id;
        this._nome = nome;
        this._numero = numero;
        this._email = email;
    }
    
}