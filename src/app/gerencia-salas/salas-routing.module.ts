import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaAlunoComponent } from '../gerencia-aluno/gerencia-aluno.component';
import { GerenciaSalasComponent } from './gerencia-salas.component';
import { GerenciaSalasModule } from './gerencia-salas.module';
import { SalasFormComponent } from './salas-form/salas-form.component';

const salasRoutes: Routes = [ 
    {path: 'salas', component: GerenciaSalasComponent},
    {path: 'edit', component: SalasFormComponent, children: [
      {path: 'alunos', component: GerenciaAlunoComponent}
    ] }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(salasRoutes)],
    exports: [RouterModule]
  })
  export class SalasRoutingModule { }
  