import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { GerenciaAlunoComponent } from './gerencia-aluno.component';

const alunosRoutes: Routes = [ 
    {path: 'alunos', component: GerenciaAlunoComponent, children: [
        {path: 'editar', component: AlunoDetalheComponent}
    ]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
  })
  export class AlunoRoutingModule { }
  