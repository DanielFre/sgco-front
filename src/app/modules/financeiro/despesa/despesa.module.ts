import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesaRoutingModule } from './despesa.routing';

import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { CriarDespesaComponent } from './criar-despesa/criar-despesa.component';

@NgModule({
  imports: [
    CommonModule,

    DespesaRoutingModule
  ],
  declarations: [
    ListarDespesasComponent,
    CriarDespesaComponent
  ]
})
export class DespesaModule { }
