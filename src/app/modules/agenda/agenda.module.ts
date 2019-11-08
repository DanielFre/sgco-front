import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { CriarAgendamentoComponent } from './criar-agendamento/criar-agendamento.component';

@NgModule({
  declarations: [AgendaComponent, CriarAgendamentoComponent],
  imports: [
    CommonModule
  ]
})
export class AgendaModule { }
