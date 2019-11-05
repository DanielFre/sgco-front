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

import { ProcedimentoService } from './core/services/domain/procedimento.service';
import { ErrorInterceptorProvider } from './core/interceptors/error-interceptor';
import { ProcedimentoComponent } from './modules/procedimento/procedimento.component';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/storage.service';

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
    FuncionarioComponent,
    ProcedimentoComponent
  ],
  providers: [
    ProcedimentoService,
    ErrorInterceptorProvider,
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
