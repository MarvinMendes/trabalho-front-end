import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professores: any[] = [
    {
       nome: "Pedro Ivo", numero: "1", email: "pedro@email.com"
    },
    {
      nome: "Alisson", numero: "2", email: "alisson@email.com"
   },
   {
    nome: "Bernardo", numero: "3", email: "Bernardo@email.com"
  }
  ]


  getProfessores() {
    return this.professores;
  }

  constructor() { }
}
