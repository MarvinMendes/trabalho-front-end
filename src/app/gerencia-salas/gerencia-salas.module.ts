import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciaSalasComponent } from './gerencia-salas.component';
import { SalasFormComponent } from './salas-form/salas-form.component';
import { FormsModule } from '@angular/forms';
import { SalasRoutingModule } from './salas-routing.module';
import { AlunoModule } from '../gerencia-aluno/aluno.module';



@NgModule({
  declarations: [
    GerenciaSalasComponent,
    SalasFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunoModule,
    SalasRoutingModule
  ]
})
export class GerenciaSalasModule { }
