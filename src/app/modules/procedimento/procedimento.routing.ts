import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProcedimentosComponent } from './listar-procedimentos/listar-procedimentos.component';
import { CriarProcedimentoComponent } from './criar-procedimento/criar-procedimento.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarProcedimentosComponent },
    { path: 'cadastrar', component: CriarProcedimentoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcedimentoRoutingModule { }