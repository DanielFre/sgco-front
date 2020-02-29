import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
	id: string;
	nome: string;
	cpf: string;
	situacao: boolean;
}

const NOMES: string[] = [
	'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
	'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
	selector: 'app-paciente',
	templateUrl: './listar-pacientes.component.html',
	styleUrls: ['./listar-pacientes.component.scss']
})
export class ListarPacientesComponent implements OnInit {

	nome;
	ativo;

	pesquisar(limpar: boolean) { }

	displayedColumns: string[] = ['id', 'nome', 'cpf', 'situacao', 'actions'];
	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor() {
		const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
		this.dataSource = new MatTableDataSource(users);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}

function createNewUser(id: number): UserData {
	const nome = NOMES[Math.round(Math.random() * (NOMES.length - 1))] + ' ' +
		NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) + '.';

	return {
		id: id.toString(),
		nome: nome,
		cpf: (Math.round(Math.random() * 999).toString() + "." + Math.round(Math.random() * 999).toString()
			+ "." + Math.round(Math.random() * 999).toString() + "-" + Math.round(Math.random() * 99).toString()),
		situacao: true,
	};
}
