import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { PacienteComponent } from './modules/paciente/paciente.component';
import { FuncionarioComponent } from './modules/funcionario/funcionario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: AuthenticationComponent, children: [{ path: '', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' }] },

  { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{ path: '', loadChildren: './modules/home/home.module#HomeModule' }] },

  { path: 'paciente', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'paciente', component: PacienteComponent, children: [{ path: '', loadChildren: './modules/paciente/paciente.module#PacienteModule' }] },

  { path: 'funcionario', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'funcionario', component: FuncionarioComponent, children: [{ path: '', loadChildren: './modules/funcionario/funcionario.module#FuncionarioModule' }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }