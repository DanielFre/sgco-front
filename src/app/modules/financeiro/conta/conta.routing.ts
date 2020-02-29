import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarContasComponent } from './listar-contas/listar-contas.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarContasComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CriarContaComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContaRoutingModule { }