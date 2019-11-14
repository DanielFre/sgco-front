import { Component, OnInit } from '@angular/core';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listar-procedimentos',
	templateUrl: './listar-procedimentos.component.html',
	styleUrls: ['./listar-procedimentos.component.scss']
})
export class ListarProcedimentosComponent implements OnInit {

	items: ProcedimentoDTO[];

	constructor(
		private router: Router,
		private procedimentoService: ProcedimentoService
	) { }

	ngOnInit() {
		this.procedimentoService.findAll()
			.subscribe(
				response => {
					this.items = response;
				},
				error => {
					if (error.status == 403) {
						this.router.navigateByUrl('/');
					}
				}
			);
	}

}
