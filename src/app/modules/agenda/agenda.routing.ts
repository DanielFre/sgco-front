import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarAgendamentoComponent } from './criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarAgendamentosComponent },
    { path: 'cadastrar', component: CriarAgendamentoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendaRoutingModule { }