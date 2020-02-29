import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioDTO } from "app/core/models/funcionario.dto";
import { FuncionarioService } from 'app/core/services/domain/funcionario.service';
import { UsuarioService } from 'app/core/services/domain/usuario.service';
import { TipoFuncionarioDTO } from 'app/core/models/tipo-funcionario.dto';
import { PermissaoDTO } from 'app/core/models/permissao.dto';

@Component({
	selector: 'app-vizualizar-funcionario',
	templateUrl: './vizualizar-funcionario.component.html',
	styleUrls: ['./vizualizar-funcionario.component.scss']
})
export class VizualizarFuncionarioComponent implements OnInit {

	userId;

	funcionario: FuncionarioDTO;
	tipoFuncionario: string;
	isDentist: boolean;
	hasUser: boolean;
	permissoesStr: string = "";
	imageToShow: any;

	tiposFuncionarios: TipoFuncionarioDTO[];

	permissoes: PermissaoDTO[];

	constructor(
		private route: ActivatedRoute,
		private funcionarioService: FuncionarioService,
		private usuarioService: UsuarioService,
		private tipoFuncionarioService: FuncionarioService
	) {
		this.route.params.subscribe(params => this.userId = params['id']);

		this.tipoFuncionarioService.findTipos()
			.subscribe(response => {
				this.tiposFuncionarios = response;
			},
				error => { }
			);

		this.usuarioService.findPermissoes()
			.subscribe(response => {
				this.permissoes = response;
			},
				error => { }
			);

		funcionarioService.findyById(this.userId)
			.subscribe(response => {
				this.funcionario = response;

				this.tiposFuncionarios.forEach(tp => {
					if (tp.cod == this.funcionario.tipo + "") {
						this.tipoFuncionario = tp.descricao;
					}
				});

				if (this.funcionario.tipo == 1) {
					this.isDentist = true;
				} else {
					this.isDentist = false;
				}

				if (this.funcionario.usuario.login) {
					this.hasUser = true;

					this.permissoes.forEach(per => {
						this.funcionario.usuario.permissoes.forEach(perU => {
							if (per.cod == perU + "") {
								this.permissoesStr += per.descricao + ", ";
							}
						});
					});
				} else {
					this.hasUser = false;
				}

				if (this.funcionario.usuario.imagem) {
					this.usuarioService.downloadImage(this.funcionario.usuario.imagem)
						.subscribe(response => {
							this.createImageFromBlob(response);
						},
							error => { }
						);
				}
			}, error => {
				console.log(error);
			})
	}

	ngOnInit() {
	}

	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.imageToShow = reader.result;
		}, false);

		if (image) {
			reader.readAsDataURL(image);
		}
	}


}
