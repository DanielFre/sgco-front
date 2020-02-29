import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarPacientesComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CriarPacienteComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PacienteRoutingModule { }