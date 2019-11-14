import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/services/storage.service';
import { UsuarioPerfilDTO } from 'app/core/models/usuario-perfil.dto';
import { UsuarioService } from 'app/core/services/domain/usuario.service';
import { Router } from '@angular/router';

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
						if (error.status == 403) {
							this.router.navigateByUrl('/');
						}
					}
				);
		} else {
			this.router.navigateByUrl('/');
		}
	}

}
