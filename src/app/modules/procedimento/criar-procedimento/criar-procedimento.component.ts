import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';

@Component({
	selector: 'app-criar-procedimento',
	templateUrl: './criar-procedimento.component.html',
	styleUrls: ['./criar-procedimento.component.scss']
})
export class CriarProcedimentoComponent implements OnInit {

	procedimentos: ProcedimentoDTO[];
	formGroup: FormGroup;

	constructor(public formBuilder: FormBuilder, private procedimentoService: ProcedimentoService, private router: Router) {
		this.formGroup = this.formBuilder.group({
			nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
			valor: ['', [Validators.required]],
			ativo: [true]
		});
	}

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	ngOnInit() {
	}

	cadastrar() {
		let aux = this.formGroup.value;

		let procedimento: ProcedimentoDTO = {
			nome: aux.nome,
			valor: aux.valor,
			ativo: aux.ativo
		};

		this.procedimentoService.insert(procedimento)
			.subscribe(response => {
				let options = {
					title: "Sucesso!",
					text: "Procedimento " + procedimento.nome + " foi adicionado com sucesso!",
					type: 'success',
				} as SweetAlertOptions;

				this.dialog.update(options);
				this.router.navigateByUrl('procedimentos/listar');
				this.dialog.fire();

			}, error => {
				switch (error.status) {
					case 401:
						break;
					default:
						let options = {
							title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
							text: (error.message) ? error.message : error.msg,
						} as SweetAlertOptions;

						this.dialog.update(options);
						this.dialog.fire();
				}

			});
	}
}
