// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id: string;
  nome: string;
  conta: string;
  // tConta: string;
  // banco: string;
  situacao: boolean;
}



// const NOMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

const VALORES: string[] = [
  'Banco A.J.Renner S.A.', 'Banco ABC Brasil S.A.', 'Banco Alfa S.A.', 'Banco Alvorada S.A.', 
  'Banco Arbi S.A.', 'Banco Azteca do Brasil S.A.', 'Banco Banerj S.A.', 'Banco Bradesco S.A.',
   'Banco Cooperativo Sicredi S.A.', 'Banco da China Brasil S.A.','Banco do Brasil S.A.', 
   'Banco Itaú BBA S.A.', 'Banco Randon S.A.', 'Banco Rural Mais S.A.', 'Banco Santander (Brasil) S.A.', 
   'Itaú Unibanco S.A.', 'HSBC Bank Brasil S.A. - Banco Múltiplo', 'Hipercard Banco Múltiplo S.A.',
    'Deutsche Bank S.A. - Banco Alemão'
];

const TIPOCONTAS: string[] = [
  'Conta-corrente', 'Conta poupança'
];



@Component({
  selector: 'app-listar-contas',
  templateUrl: './listar-contas.component.html',
  styleUrls: ['./listar-contas.component.scss']
})
export class ListarContasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'conta','situacao', 'actions'];
  // displayedColumns: string[] = ['id', 'name', 'progress', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { 
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewConta(k + 1));
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

function createNewConta(id: number): UserData {
  // const nome = NOMES[Math.round(Math.random() * (NOMES.length - 1))] + ' ' +
  //   NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) + '.';

    const nome = VALORES[Math.round(Math.random() * (VALORES.length - 1))] + ' ' +
    VALORES[Math.round(Math.random() * (VALORES.length - 1))].charAt(0) + '.';

    const conta = TIPOCONTAS[Math.round(Math.random() * (TIPOCONTAS.length - 1))];

  return {
    id: id.toString(),
    nome: nome,
    conta: conta,
    // tConta:tConta,
    // banco:banco,
    situacao:true,
  };
}