import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProcedimentosComponent } from './listar-procedimentos/listar-procedimentos.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarProcedimentosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcedimentoRoutingModule { }