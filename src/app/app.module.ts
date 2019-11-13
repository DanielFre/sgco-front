import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './modules/components/components.module';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';


import { AuthInterceptorProvider } from './core/interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './core/interceptors/error-interceptor';
import { StorageService } from './core/services/storage.service';
import { AuthService } from './core/services/auth.service';
import { UsuarioService } from './core/services/domain/usuario.service';
import { ProcedimentoService } from './core/services/domain/procedimento.service';

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

		AuthenticationComponent
	],
	providers: [
		AuthInterceptorProvider,
		ErrorInterceptorProvider,
		StorageService,
		AuthService,
		UsuarioService,
		ProcedimentoService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
