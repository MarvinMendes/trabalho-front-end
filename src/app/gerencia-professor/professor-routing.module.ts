import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaProfessorComponent } from './gerencia-professor.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';

const professorRoutes: Routes = [ 
    {path: 'professor', component: GerenciaProfessorComponent, children: [
        {path: 'edit', component: ProfessorDetalheComponent}
    ]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(professorRoutes)],
    exports: [RouterModule]
  })
  export class ProfessorRoutingModule { }
  