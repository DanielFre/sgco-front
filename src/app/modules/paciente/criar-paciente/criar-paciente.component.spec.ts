import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPacienteComponent } from './criar-paciente.component';

describe('CriarPacienteComponent', () => {
  let component: CriarPacienteComponent;
  let fixture: ComponentFixture<CriarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
