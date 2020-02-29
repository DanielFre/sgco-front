import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarReceitasComponent } from './listar-receitas/listar-receitas.component';
import { CriarReceitaComponent } from './criar-receita/criar-receita.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarReceitasComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CriarReceitaComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceitaRoutingModule { }