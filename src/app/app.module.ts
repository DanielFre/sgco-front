import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './modules/components/components.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { PacienteComponent } from './modules/paciente/paciente.component';
import { FuncionarioComponent } from './modules/funcionario/funcionario.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
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
