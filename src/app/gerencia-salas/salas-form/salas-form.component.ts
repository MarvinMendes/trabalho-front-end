import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/gerencia-aluno/alunos.service';


@Component({
  selector: 'app-salas-form',
  templateUrl: './salas-form.component.html',
  styleUrls: ['./salas-form.component.css']
})
export class SalasFormComponent implements OnInit {


  alunos: any[] = []

  constructor(private _alunosService: AlunosService) { }

  ngOnInit(): void {

    this.alunos = this._alunosService.getAlunos();
  }

}
