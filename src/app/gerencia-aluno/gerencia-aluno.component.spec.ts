import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaAlunoComponent } from './gerencia-aluno.component';

describe('GerenciaAlunoComponent', () => {
  let component: GerenciaAlunoComponent;
  let fixture: ComponentFixture<GerenciaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
