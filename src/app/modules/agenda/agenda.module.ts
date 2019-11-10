import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda.routing';

import { CriarAgendamentoComponent } from './criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';

@NgModule({
	imports: [
		CommonModule,

		AgendaRoutingModule
	],
	declarations: [
		CriarAgendamentoComponent,
		ListarAgendamentosComponent
	]
})
export class AgendaModule { }
