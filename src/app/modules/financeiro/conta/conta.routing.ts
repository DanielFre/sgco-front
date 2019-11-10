import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarContasComponent } from './listar-contas/listar-contas.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarContasComponent },
    { path: 'cadastrar', component: CriarContaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContaRoutingModule { }