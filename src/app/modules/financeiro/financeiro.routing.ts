import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'contas', pathMatch: 'full' },

    { path: 'contas', loadChildren: './conta/conta.module#ContaModule' },
    { path: 'despesas', loadChildren: './despesa/despesa.module#DespesaModule' },
    { path: 'receitas', loadChildren: './receita/receita.module#ReceitaModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinanceiroRoutingModule { }