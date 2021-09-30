import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GerenciaProfessorComponent } from './gerencia-professor/gerencia-professor.component';
import { GerenciaAlunoComponent } from './gerencia-aluno/gerencia-aluno.component';
import { GerenciaSalasComponent } from './gerencia-salas/gerencia-salas.component';
import { HomeComponent } from './home/home.component';
import { AlunoRoutingModule } from './gerencia-aluno/aluno-routing.module';
import { AlunoModule } from './gerencia-aluno/aluno.module';
import { ProfessorDetalheComponent } from './gerencia-professor/professor-detalhe/professor-detalhe.component';
import { ProfessorModule } from './gerencia-professor/professor.module';
import { SalasFormComponent } from './gerencia-salas/salas-form/salas-form.component';
import { GerenciaSalasModule } from './gerencia-salas/gerencia-salas.module';

@NgModule({
  declarations: [
    AppComponent,
    //GerenciaProfessorComponent,
    //GerenciaAlunoComponent,
    //GerenciaSalasComponent,
    HomeComponent,
    //ProfessorDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlunoModule,
    ProfessorModule,
    GerenciaSalasModule,
    ProfessorModule,
    GerenciaSalasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
