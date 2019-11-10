import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaRoutingModule } from './receita.routing';

import { ListarReceitasComponent } from './listar-receitas/listar-receitas.component';
import { CriarReceitaComponent } from './criar-receita/criar-receita.component';

@NgModule({
  imports: [
    CommonModule,

    ReceitaRoutingModule
  ],
  declarations: [
    ListarReceitasComponent,
    CriarReceitaComponent
  ]

})
export class ReceitaModule { }
