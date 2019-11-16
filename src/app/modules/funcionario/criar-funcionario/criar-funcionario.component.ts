import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisService } from 'app/core/services/domain/pais.service';
import { EstadoService } from 'app/core/services/domain/estado.service';
import { CidadeService } from 'app/core/services/domain/cidade.service';
import { PaisDTO } from 'app/core/models/pais.dto';
import { EstadoDTO } from 'app/core/models/estado.dto';
import { CidadeDTO } from 'app/core/models/cidade.dto';
import { FuncionarioService } from 'app/core/services/domain/funcionario.service';
import { TipoFuncionarioDTO } from 'app/core/models/tipo-funcionario.dto';
import { UsuarioService } from 'app/core/services/domain/usuario.service';
import { PermissaoDTO } from 'app/core/models/permissao.dto';

class ImageSnippet {
	pending: boolean = false;
	status: string = 'init';

	constructor(public src: string, public file: File) { }
}

@Component({
	selector: 'app-criar-funcionario',
	templateUrl: './criar-funcionario.component.html',
	styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit {

	isDentist: boolean;
	hasUser: boolean;

	selectedFile: ImageSnippet;

	formGroup: FormGroup;

	paises: PaisDTO[];
	estados: EstadoDTO[];
	cidades: CidadeDTO[];

	tiposFuncionarios: TipoFuncionarioDTO[];

	permissoes: PermissaoDTO[];

	constructor(
		public formBuilder: FormBuilder,
		public paisService: PaisService,
		public estadoService: EstadoService,
		public cidadeService: CidadeService,
		public tipoFuncionarioService: FuncionarioService,
		private usuarioService: UsuarioService
	) {
		this.formGroup = this.formBuilder.group({
			nome: ['Allana Lorena Eloá Carvalho', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
			nascimento: ['30/05/1998', Validators.required],
			rg: ['16.470.174-6', [Validators.required]],
			cpf: ['023.373.937-80', [Validators.required]],
			sexo: ['F', [Validators.required]],
			tipo: [null, [Validators.required]],
			corAgenda: ['Red'],
			crmCro: ['23154512'],

			logradouro: ['Rua C', [Validators.required]],
			bairro: ['Parque Aldeia', [Validators.required]],
			numero: ['233', [Validators.required]],
			cep: ['28060-534', [Validators.required]],
			complemento: ['asdsa', [Validators.required]],
			idPais: [null, [Validators.required]],
			idEstado: [null, [Validators.required]],
			idCidade: [null, [Validators.required]],

			email: ['allanalorenaeloacarvalho@santosferreira.adv.br', [Validators.required]],
			telefone1: ['(22) 98265-9517', [Validators.required]],
			telefone2: ['(22) 98265-9517', [Validators.required]],

			senha: ['123'],
			ativo: [true],
			imagem: [null],
			permissoes: [null]
		});
	}

	ngOnInit() {
		this.isDentist = false;
		this.hasUser = false;

		this.paisService.findAll()
			.subscribe(response => {
				this.paises = response;
				this.formGroup.controls.idPais.setValue(this.paises[0].id);
				this.updateEstados();
			},
				error => { }
			);

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
				error => {
					console.log("erro");
				}
			);
	}

	isWorkerUser() {
		this.hasUser = !this.hasUser;
	}

	cadastrar() {
		console.log(this.formGroup.controls.permissoes.value);
	}

	updateTipo() {
		let tipo = this.formGroup.value.tipo;

		if (tipo == 1) {
			this.isDentist = true;
		} else {
			this.isDentist = false;
		}
	}

	updateEstados() {
		let idPais = this.formGroup.value.idPais;
		this.estadoService.findAll(idPais)
			.subscribe(response => {
				this.estados = response;
				this.formGroup.controls.idEstado.setValue(null);
			},
				error => { }
			);
	}

	updateCidades() {
		let idEstado = this.formGroup.value.idEstado;
		this.cidadeService.findAll(idEstado)
			.subscribe(response => {
				this.cidades = response;
				this.formGroup.controls.idCidade.setValue(null);
			},
				error => { }
			);
	}

	processFile(imageInput: any) {
		const file: File = imageInput.files[0];
		const reader = new FileReader();

		reader.addEventListener('load', (event: any) => {
			this.selectedFile = new ImageSnippet(event.target.result, file);

			this.selectedFile.pending = true;
			this.usuarioService.uploadImage(this.selectedFile.file)
				.subscribe(response => {
					this.onSuccess();
				},
					error => {
						this.onError();
					}
				);
		});

		reader.readAsDataURL(file);
	}

	private onSuccess() {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'ok';
		this.formGroup.controls.imagem.setValue(this.selectedFile.src);
	}

	private onError() {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'fail';
		this.selectedFile.src = '';
		this.formGroup.controls.imagem.setValue(null);
	}

}
