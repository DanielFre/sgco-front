import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './modules/components/components.module';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { PacienteComponent } from './modules/paciente/paciente.component';
import { FuncionarioComponent } from './modules/funcionario/funcionario.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,

    HttpClientModule,
    RouterModule,

    ComponentsModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    AuthenticationComponent,
    HomeComponent,
    PacienteComponent,
    FuncionarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
