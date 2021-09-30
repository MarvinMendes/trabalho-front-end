import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaAlunoComponent } from './gerencia-aluno/gerencia-aluno.component';
import { GerenciaProfessorComponent } from './gerencia-professor/gerencia-professor.component';
import { GerenciaSalasComponent } from './gerencia-salas/gerencia-salas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {path: "", component: HomeComponent},
  {path: 'home', component: HomeComponent},
  //{path: 'professores', component: GerenciaProfessorComponent },
  //{path: 'alunos', component: GerenciaAlunoComponent},
  {path: 'salas', component: GerenciaSalasComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
