import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioService } from 'app/core/services/domain/funcionario.service';
import { FuncionarioGetDTO } from 'app/core/models/funcionario-get.dto';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';
import { Router } from '@angular/router';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
	selector: 'app-listar-funcionarios',
	templateUrl: './listar-funcionarios.component.html',
	styleUrls: ['./listar-funcionarios.component.scss']
})
export class ListarFuncionariosComponent implements OnInit {

	nome: string;
	ativo: boolean;

	displayedColumns: string[] = ['id', 'nome', 'cpf', 'situacao', 'actions'];
	public dataSource: MatTableDataSource<FuncionarioGetDTO>;

	public pageSize = 24;
	public currentPage = 0;
	public totalSize = 0;

	public orderBy = 'nome';
	public direction = 'ASC';

	constructor(
		private funcionarioService: FuncionarioService,
		private router: Router
	) { }

	ngOnInit() {
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

		this.funcionarioService.findByFilter(this.nome, this.ativo, this.currentPage, this.pageSize, this.orderBy, this.direction)
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

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	public Desativar() {
		this.funcionarioService.desativar(this.idAtual)
			.subscribe(response => {
				let options = {
					title: "Sucesso",
					text: "Funcionário desativado",
					type: "success"
				} as SweetAlertOptions;

				this.dialog.update(options);
				this.dialog.fire();

				this.pesquisar(false);
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

	visualizar(id: number) {
		this.router.navigateByUrl(`/funcionarios/visualizar/${id}`);
	}

}