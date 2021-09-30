import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { GerenciaProfessorComponent } from './gerencia-professor.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfessorRoutingModule } from './professor-routing.module';



@NgModule({
  declarations: [
    ProfessorDetalheComponent,
    GerenciaProfessorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
