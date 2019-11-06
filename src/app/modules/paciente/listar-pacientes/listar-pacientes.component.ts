//import { Component, OnInit } from '@angular/core';

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

/** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray', 'red'
// ];

const NOMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */



@Component({
  selector: 'app-paciente',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.scss']
})


export class ListarPacientesComponent implements OnInit {



  displayedColumns: string[] = ['id', 'nome', 'cpf', 'situacao', 'actions'];
  // displayedColumns: string[] = ['id', 'name', 'progress', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor() {

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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

/** Builds and returns a new User. */
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