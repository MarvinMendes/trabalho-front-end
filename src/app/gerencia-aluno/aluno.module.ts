import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AlunoRoutingModule } from "./aluno-routing.module";
import { GerenciaAlunoComponent } from "./gerencia-aluno.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


@NgModule({
    declarations: [
      GerenciaAlunoComponent,
      AlunoDetalheComponent
    ],
    imports: [
      BrowserModule,
      AlunoRoutingModule
    ],
    providers: [],
  })
export class AlunoModule {}