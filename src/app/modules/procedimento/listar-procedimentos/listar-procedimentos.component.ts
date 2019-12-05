import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
	dataSource = new MatTableDataSource<ProcedimentoDTO>();
	items: ProcedimentoDTO[];

	nome: string;
	ativo: boolean;

	@ViewChild('dialog', null)
	private dialog: SwalComponent;
	
	displayedColumns: string[] = ['id', 'nome', 'valor', 'ativo', 'actions'];

	public pageSize = 24;
	public currentPage = 0;
	public totalSize = 0;

	public orderBy = 'nome';
	public direction = 'ASC';


	ngOnInit() {
		// this.procedimentoService.findAll()
		// 	.subscribe(
		// 		response => {
		// 			this.items = response;
		// 		},
		// 		error => {
		// 			switch (error.status) {
		// 				case 403:
		// 					this.dialog.fire();
		// 					break;
		// 				default:
		// 					let options = {
		// 						title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
		// 						text: (error.message) ? error.message : error.msg,
		// 						type: "error"
		// 					} as SweetAlertOptions;
		// 					this.dialog.update(options);
		// 					this.dialog.fire();
		// 			}
		// 			this.redirecionar();
		// 		}
		// 	);
		// this.dataSource.paginator = this.paginator;

	}


	public handlePage(e: PageEvent) {
		this.currentPage = e.pageIndex;
		this.pesquisar(false);
	}

	public handleSort(e) {
		this.orderBy = e.active;
		this.direction = e.direction.toUpperCase();
		this.pesquisar(false);
	}

	public pesquisar(limpar: boolean) {
		if (limpar) {
			this.limpar();
		}

		this.procedimentoService.findByFilter(this.nome, this.ativo, this.currentPage, this.pageSize, this.orderBy, this.direction)
			.subscribe(response => {
				this.dataSource = new MatTableDataSource(response['content']);

				this.totalSize = response['totalPages'];
			},
				error => {
					let options = {
						title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
						text: (error.message) ? error.message : error.msg,
						type: "error"
					} as SweetAlertOptions;

					this.dialog.update(options);
					this.dialog.fire();
				}
			);
	}

	public redirecionar() {
		this.router.navigateByUrl('/home');
	}

	private limpar() {
		this.currentPage = 0;
		this.totalSize = 0;
		this.orderBy = 'nome';
		this.direction = 'ASC';
	}

	private idAtual: number;

	public setIdAtual(id: number) {
		this.idAtual = id;
	}

	public update(row) {
		console.log(row.id);
		this.router.navigateByUrl("procedimentos/editar/" + row.id);
	}

}
