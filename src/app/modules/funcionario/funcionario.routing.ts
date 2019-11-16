import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';

const routes: Routes = [
	{ path: '', redirectTo: 'listar', pathMatch: 'full' },
	{ path: 'listar', component: ListarFuncionariosComponent },
	{ path: 'cadastrar', component: CriarFuncionarioComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FuncionarioRoutingModule { }