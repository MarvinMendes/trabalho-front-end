import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrls: ['./professor-detalhe.component.css']
})
export class ProfessorDetalheComponent implements OnInit {

  professores: any[] = [];

  constructor(private _professoresService: ProfessorService) { }

  ngOnInit(): void {
    this.professores = this._professoresService.getProfessores();
  }


}
