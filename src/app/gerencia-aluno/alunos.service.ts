import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {


  alunos: any[] = [
  {
     id: 1, nome: "Marvin", numero: "123141241", email: "marvin@email.com"
  },
  {
    id: 2, nome: "Julia", numero: "234423423", email: "julia@email.com"
 },
 {
  id: 3, nome: "Nean", numero: "345345345", email: "nean@email.com"
},
{
  id: 4, nome: "Nayara", numero: "445645644", email: "nay@email.com"
}
]


  public getAlunos() {
    return this.alunos;
  }

  constructor() { }
}
