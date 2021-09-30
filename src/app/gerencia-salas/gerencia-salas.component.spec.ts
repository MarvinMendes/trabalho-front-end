import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaSalasComponent } from './gerencia-salas.component';

describe('GerenciaSalasComponent', () => {
  let component: GerenciaSalasComponent;
  let fixture: ComponentFixture<GerenciaSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
