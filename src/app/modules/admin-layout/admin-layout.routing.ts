import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CriarFuncionarioComponent } from '../funcionarios/criar-funcionario/criar-funcionario.component';
import { ListarFuncionariosComponent } from '../funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CriarPacienteComponent } from '../paciente/criar-paciente/criar-paciente.component';
import { ListarPacientesComponent } from '../paciente/listar-pacientes/listar-pacientes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },

    // { path: 'procedimento', component: ProcedimentoComponent },
    // { path: 'agenda', component: AgendaComponent },
    { path: 'criar-funcionario', component: CriarFuncionarioComponent },
    { path: 'listar-funcionarios', component: ListarFuncionariosComponent },
    // { path: 'conta', component: ContaComponent },
    // { path: 'despesa', component: DespesaComponent },
    // { path: 'receita', component: ReceitaComponent },
    { path: 'criar-paciente', component: CriarPacienteComponent },
    { path: 'listar-pacientes', component: ListarPacientesComponent }
];
