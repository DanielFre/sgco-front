import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarAgendamentoComponent } from './criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './listar-agendamentos/listar-agendamentos.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarAgendamentosComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CriarAgendamentoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendaRoutingModule { }