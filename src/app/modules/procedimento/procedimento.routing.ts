import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProcedimentosComponent } from './listar-procedimentos/listar-procedimentos.component';
import { CriarProcedimentoComponent } from './criar-procedimento/criar-procedimento.component';
import { EditarProcedimentoComponent} from './editar-procedimento/editar-procedimento.component';
import { AuthGuard } from 'app/core/interceptors/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarProcedimentosComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CriarProcedimentoComponent, canActivate: [AuthGuard] },
    { path: 'editar/:id', component: EditarProcedimentoComponent, canActivate: [AuthGuard]}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcedimentoRoutingModule { }