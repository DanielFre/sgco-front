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
import { FuncionarioDTO } from 'app/core/models/funcionario.dto';
import { EnderecoDTO } from 'app/core/models/endereco.dto';
import { ContatoDTO } from 'app/core/models/contato.dto';
import { UsuarioDTO } from 'app/core/models/usuario.dto';

import * as moment from 'moment';

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

	startDate = new Date(1990, 0, 1);

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
		private usuarioService: UsuarioService,
		private funcionarioService: FuncionarioService
	) {
		this.formGroup = this.formBuilder.group({
			nome: ['Allana Lorena Eloá Carvalho', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
			nascimento: [null, Validators.required],
			rg: ['16.470.174-6', [Validators.required]],
			cpf: ['023.373.937-80', [Validators.required]],
			sexo: ['F', [Validators.required]],
			tipo: [null, [Validators.required]],
			corAgenda: ['#752020'],
			crmCro: ['23154512'],

			logradouro: ['Rua C', [Validators.required]],
			bairro: ['Parque Aldeia', [Validators.required]],
			numero: ['233', [Validators.required]],
			cep: ['28060-534', [Validators.required]],
			complemento: ['Teste', [Validators.required]],
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
					let body: any = response.body;

					this.onSuccess(body.fileName);
				},
					error => {
						this.onError();
					}
				);
		});

		reader.readAsDataURL(file);
	}

	cadastrar() {
		let aux = this.formGroup.value;

		let endereco: EnderecoDTO = {
			logradouro: aux.logradouro,
			bairro: aux.bairro,
			numero: aux.numero,
			cep: aux.cep,
			complemento: aux.complemento,
			idCidade: aux.idCidade
		};

		let contato: ContatoDTO = {
			email: aux.email,
			telefone1: aux.telefone1,
			telefone2: aux.telefone2
		};

		let usuario: UsuarioDTO = {
			login: aux.email,
			senha: aux.senha,
			ativo: aux.ativo,
			imagem: aux.imagem,
			permissoes: aux.permissoes
		};

		let funcionario: FuncionarioDTO = {
			nome: aux.nome,
			cpf: aux.cpf,
			rg: aux.rg,
			sexo: aux.sexo,
			ativo: aux.ativo,
			nascimento: moment(aux.nascimento).format('YYYY-MM-DD'),
			tipo: aux.tipo,
			corAgenda: aux.corAgenda,
			crmCro: aux.crmCro,
			endereco: endereco,
			contato: contato,
			usuario: usuario
		};

		this.funcionarioService.insert(funcionario)
			.subscribe(response => {
				console.log("n pode c");
			}, error => {
				console.log(error);
			});
	}

	private onSuccess(fileName: string) {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'ok';

		this.formGroup.controls.imagem.setValue(fileName);
	}

	private onError() {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'fail';
		this.selectedFile.src = '';

		this.formGroup.controls.imagem.setValue(null);
	}

}
