import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { AdminLayoutComponent } from './modules/components/admin-layout/admin-layout.component';


const routes: Routes = [
	{ path: '', component: AuthenticationComponent, loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },

	{ path: 'home', component: AdminLayoutComponent, loadChildren: './modules/home/home.module#HomeModule' },
	{ path: 'agenda', component: AdminLayoutComponent, loadChildren: './modules/agenda/agenda.module#AgendaModule' },
	{ path: 'pacientes', component: AdminLayoutComponent, loadChildren: './modules/paciente/paciente.module#PacienteModule' },
	{ path: 'funcionarios', component: AdminLayoutComponent, loadChildren: './modules/funcionario/funcionario.module#FuncionarioModule' },
	{ path: 'procedimentos', component: AdminLayoutComponent, loadChildren: './modules/procedimento/procedimento.module#ProcedimentoModule' },
	{ path: 'financeiro', component: AdminLayoutComponent, loadChildren: './modules/financeiro/financeiro.module#FinanceiroModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }