import { Component, OnInit } from '@angular/core';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';

@Component({
	selector: 'app-listar-procedimentos',
	templateUrl: './listar-procedimentos.component.html',
	styleUrls: ['./listar-procedimentos.component.scss']
})
export class ListarProcedimentosComponent implements OnInit {

	items: ProcedimentoDTO[];

	constructor(private procedimentoService: ProcedimentoService) { }

	ngOnInit() {
		this.procedimentoService.findAll()
			.subscribe(
				response => {
					this.items = response;
				},
				error => { }
			);
	}

}
