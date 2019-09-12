import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentoComponent } from './procedimento.component';

describe('ProcedimentoComponent', () => {
  let component: ProcedimentoComponent;
  let fixture: ComponentFixture<ProcedimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
