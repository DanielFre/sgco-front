import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './modules/components/components.module';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { AuthInterceptorProvider } from './core/interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './core/interceptors/error-interceptor';
import { StorageService } from './core/services/storage.service';
import { AuthService } from './core/services/auth.service';
import { UsuarioService } from './core/services/domain/usuario.service';
import { ProcedimentoService } from './core/services/domain/procedimento.service';
import { PaisService } from './core/services/domain/pais.service';
import { EstadoService } from './core/services/domain/estado.service';
import { CidadeService } from './core/services/domain/cidade.service';
import { FuncionarioService } from './core/services/domain/funcionario.service';

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
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
		{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },

		AuthInterceptorProvider,
		ErrorInterceptorProvider,
		StorageService,
		AuthService,
		UsuarioService,
		ProcedimentoService,
		PaisService,
		EstadoService,
		CidadeService,
		FuncionarioService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
