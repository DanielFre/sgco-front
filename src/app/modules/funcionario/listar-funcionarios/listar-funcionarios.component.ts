import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioService } from 'app/core/services/domain/funcionario.service';
import { FuncionarioGetDTO } from 'app/core/models/funcionario-get.dto';

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

	constructor(private funcionarioService: FuncionarioService) { }

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
				error => { }
			);
	}

	private limpar() {
		this.currentPage = 0;
		this.totalSize = 0;
		this.orderBy = 'nome';
		this.direction = 'ASC';
	}

}