import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {


  alunos: any[] = [];

  constructor(private _alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this._alunosService.getAlunos();
  }

}
