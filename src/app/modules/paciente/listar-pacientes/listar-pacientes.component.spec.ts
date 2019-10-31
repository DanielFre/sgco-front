import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPacientesComponent } from './listar-pacientes.component';

describe('ListarPacientesComponent', () => {
  let component: ListarPacientesComponent;
  let fixture: ComponentFixture<ListarPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
