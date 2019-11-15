import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisService } from 'app/core/services/domain/pais.service';
import { EstadoService } from 'app/core/services/domain/estado.service';
import { CidadeService } from 'app/core/services/domain/cidade.service';
import { PaisDTO } from 'app/core/models/pais.dto';
import { EstadoDTO } from 'app/core/models/estado.dto';
import { CidadeDTO } from 'app/core/models/cidade.dto';

@Component({
	selector: 'app-criar-funcionario',
	templateUrl: './criar-funcionario.component.html',
	styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit {

	isDentist: boolean;
	hasUser: boolean;

	formGroup: FormGroup;

	paises: PaisDTO[];
	estados: EstadoDTO[];
	cidades: CidadeDTO[];

	constructor(
		public formBuilder: FormBuilder,
		public paisService: PaisService,
		public estadoService: EstadoService,
		public cidadeService: CidadeService
	) {
		this.formGroup = this.formBuilder.group({
			nome: ['Allana Lorena Eloá Carvalho', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
			nascimento: ['30/05/1998', Validators.required],
			rg: ['16.470.174-6', [Validators.required]],
			cpf: ['023.373.937-80', [Validators.required]],
			sexo: ['F', [Validators.required]],
			crmCro: ['23154512', [Validators.required]],

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

			senha: ['123']
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
	}

	isWorkerDentist() {
		this.isDentist = !this.isDentist;
	}

	isWorkerUser() {
		this.hasUser = !this.hasUser;
	}

	cadastrar() {
		console.log("enviou");
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

}
