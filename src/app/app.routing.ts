import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { PacienteComponent } from './modules/paciente/paciente.component';
import { FuncionarioComponent } from './modules/funcionario/funcionario.component';
import { ProcedimentoComponent } from './modules/procedimento/procedimento.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: AuthenticationComponent, children: [{ path: '', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' }] },

  { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{ path: '', loadChildren: './modules/home/home.module#HomeModule' }] },

  { path: 'paciente', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'paciente', component: PacienteComponent, children: [{ path: '', loadChildren: './modules/paciente/paciente.module#PacienteModule' }] },

  { path: 'funcionario', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'funcionario', component: FuncionarioComponent, children: [{ path: '', loadChildren: './modules/funcionario/funcionario.module#FuncionarioModule' }] },

  { path: 'procedimento', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'procedimento', component: ProcedimentoComponent, children: [{ path: '', loadChildren: './modules/procedimento/procedimento.module#ProcedimentoModule' }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }