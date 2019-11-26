import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
	) {
		
	 }

	@ViewChild('dialog', null)
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	private dialog: SwalComponent;

	displayedColumns: string[] = ['id', 'nome', 'valor', 'ativo', 'actions'];
	dataSource: MatTableDataSource<ProcedimentoDTO>;

	ngOnInit() {
		this.procedimentoService.findAll()
			.subscribe(
				response => {
					this.items = response;
				},
				error => {
					switch (error.status) {
						case 403:
							this.dialog.fire();
							break;
						default:
							let options = {
								title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
								text: (error.message) ? error.message : error.msg,
								type: "error"
							} as SweetAlertOptions;

							this.dialog.update(options);
							this.dialog.fire();
					}

					this.redirecionar();
				}
			);
	}

	public redirecionar() {
		this.router.navigateByUrl('/home');
	}
	public changeBoolean(){
		
	}

}
