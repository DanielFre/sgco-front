import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { CriarDespesaComponent } from './criar-despesa/criar-despesa.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarDespesasComponent },
    { path: 'cadastrar', component: CriarDespesaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DespesaRoutingModule { }