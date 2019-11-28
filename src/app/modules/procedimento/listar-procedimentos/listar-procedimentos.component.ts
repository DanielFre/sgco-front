import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
	selector: 'app-listar-procedimentos',
	templateUrl: './listar-procedimentos.component.html',
	styleUrls: ['./listar-procedimentos.component.scss']
})
export class ListarProcedimentosComponent implements OnInit {

	constructor(
		private router: Router,
		private procedimentoService: ProcedimentoService
	) {

	}
	items: ProcedimentoDTO[];
	dataSource = new MatTableDataSource<ProcedimentoDTO>();

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	@ViewChild('dialog', null)
	private dialog: SwalComponent;
	displayedColumns: string[] = ['id', 'nome', 'valor', 'ativo', 'actions'];


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
		this.dataSource.paginator = this.paginator;
	}

	public redirecionar() {
		this.router.navigateByUrl('/home');
	}

	public update(row) {
		console.log(row.id);
		this.router.navigateByUrl("procedimentos/editar/"+ row.id);
	}

}
