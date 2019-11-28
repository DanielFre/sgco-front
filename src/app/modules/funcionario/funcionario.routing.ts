import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';
import { VizualizarFuncionarioComponent } from './vizualizar-funcionario/vizualizar-funcionario.component';

const routes: Routes = [
	{ path: '', redirectTo: 'listar', pathMatch: 'full' },
	{ path: 'listar', component: ListarFuncionariosComponent, canActivate: [AuthGuard] },
	{ path: 'cadastrar', component: CriarFuncionarioComponent, canActivate: [AuthGuard] },
	{ path: 'visualizar/:id', component: VizualizarFuncionarioComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FuncionarioRoutingModule { }