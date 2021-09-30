import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaProfessorComponent } from './gerencia-professor.component';

describe('GerenciaProfessorComponent', () => {
  let component: GerenciaProfessorComponent;
  let fixture: ComponentFixture<GerenciaProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
