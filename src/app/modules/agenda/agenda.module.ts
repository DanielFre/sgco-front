import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda.routing';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { CriarAgendamentoComponent } from './criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';

@NgModule({
	imports: [
		CommonModule,
		FullCalendarModule,
		AgendaRoutingModule
	],
	declarations: [
		CriarAgendamentoComponent,
		ListarAgendamentosComponent
	]
})
export class AgendaModule { }
