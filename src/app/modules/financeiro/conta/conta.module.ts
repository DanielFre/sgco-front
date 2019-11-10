import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta.routing';

import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { ListarContasComponent } from './listar-contas/listar-contas.component';

@NgModule({
  imports: [
    CommonModule,

    ContaRoutingModule
  ],
  declarations: [
    CriarContaComponent,
    ListarContasComponent
  ]
})
export class ContaModule { }
