import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProcedimentoComponent} from '../../procedimento/procedimento.component';
import { AgendaComponent } from '../../agenda/agenda.component';
import { FuncionarioComponent } from '../../funcionario/funcionario.component';
import { ContaComponent } from '../../financeiro/conta/conta.component';
import { DespesaComponent } from '../../financeiro/despesa/despesa.component';
import { ReceitaComponent } from '../../financeiro/receita/receita.component';
import { PacienteComponent } from '../../paciente/paciente.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AgendaComponent,
    FuncionarioComponent,
    ContaComponent,
    DespesaComponent,
    ReceitaComponent,
    PacienteComponent,
    ProcedimentoComponent,
  ]
})

export class AdminLayoutModule {}
