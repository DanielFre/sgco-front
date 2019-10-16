import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProcedimentoComponent } from '../../procedimento/procedimento.component';
import { AgendaComponent } from '../../agenda/agenda.component';

import { CriarFuncionarioComponent } from '../../funcionarios/criar-funcionario/criar-funcionario.component';
import { ListarFuncionariosComponent } from '../../funcionarios/listar-funcionarios/listar-funcionarios.component';
import { ContaComponent } from '../../financeiro/conta/conta.component';
import { DespesaComponent } from '../../financeiro/despesa/despesa.component';
import { ReceitaComponent } from '../../financeiro/receita/receita.component';
import { PacienteComponent } from '../../paciente/paciente.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'procedimento', component: ProcedimentoComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'funcionarios/listarfuncionarios', component: ListarFuncionariosComponent },
    { path: 'funcionarios/criarfuncionario', component: CriarFuncionarioComponent },
    { path: 'conta', component: ContaComponent },
    { path: 'despesa', component: DespesaComponent },
    { path: 'receita', component: ReceitaComponent },
    { path: 'paciente', component: PacienteComponent },

];
