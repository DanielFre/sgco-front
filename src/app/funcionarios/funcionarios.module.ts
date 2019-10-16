import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';

@NgModule({
  declarations: [ListarFuncionariosComponent, CriarFuncionarioComponent],
  imports: [
    CommonModule
  ]
})
export class FuncionariosModule { }
