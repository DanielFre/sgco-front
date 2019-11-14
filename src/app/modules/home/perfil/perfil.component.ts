import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'app/core/services/storage.service';
import { UsuarioPerfilDTO } from 'app/core/models/usuario-perfil.dto';
import { UsuarioService } from 'app/core/services/domain/usuario.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	usuario: UsuarioPerfilDTO;

	constructor(
		private router: Router,
		public storage: StorageService,
		public usuarioService: UsuarioService
	) { }

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	ngOnInit() {
		let localUser = this.storage.getLocalUser();

		if (localUser && localUser.email) {
			this.usuarioService.findPerfil(localUser.email)
				.subscribe(
					response => {
						this.usuario = response;

						if (this.usuario.crmCro) {
							this.usuario.tipo += " - CRM/CRO " + this.usuario.crmCro;
						}

						if (this.usuario.imagem) {
							this.usuario.imagem = "./assets/img/faces/" + this.usuario.imagem + ".jpg";
						}
					},
					error => {
						switch (error.status) {
							case 403:
								this.dialog.fire();
								break;
							default:
								let options = {
									title: "Erro " + error.status + ": " + error.error,
									text: error.message,
									type: "error"
								} as SweetAlertOptions;

								this.dialog.update(options);
								this.dialog.fire();
						}

						this.redirecionar();
					}
				);
		} else {
			this.router.navigateByUrl('/');
		}
	}

	public redirecionar() {
		this.router.navigateByUrl('/home');
	}

}
