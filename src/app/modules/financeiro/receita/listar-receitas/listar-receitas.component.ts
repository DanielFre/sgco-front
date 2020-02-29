// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id: string;
  nome: string;
  valor: string;
  situacao: boolean;
}


const NOMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

// const VALORES: string[] = [
//   'Banco A.J.Renner S.A.', 'Banco ABC Brasil S.A.', 'Banco Alfa S.A.', 'Banco Alvorada S.A.', 
//   'Banco Arbi S.A.', 'Banco Azteca do Brasil S.A.', 'Banco Banerj S.A.', 'Banco Bradesco S.A.',
//    'Banco Cooperativo Sicredi S.A.', 'Banco da China Brasil S.A.','Banco do Brasil S.A.', 
//    'Banco Itaú BBA S.A.', 'Banco Randon S.A.', 'Banco Rural Mais S.A.', 'Banco Santander (Brasil) S.A.', 
//    'Itaú Unibanco S.A.', 'HSBC Bank Brasil S.A. - Banco Múltiplo', 'Hipercard Banco Múltiplo S.A.',
//     'Deutsche Bank S.A. - Banco Alemão'
// ];

// const VALORRECEITA: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

@Component({
  selector: 'app-listar-receitas',
  templateUrl: './listar-receitas.component.html',
  styleUrls: ['./listar-receitas.component.scss']
})
export class ListarReceitasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'valor','situacao', 'actions'];
  // displayedColumns: string[] = ['id', 'name', 'progress', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { 
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewReceita(k + 1));
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

function createNewReceita(id: number): UserData {
  const nome = NOMES[Math.round(Math.random() * (NOMES.length - 1))] + ' ' +
    NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) + '.';
    
   

    // const valor = VALORRECEITA[Math.round(Math.random() * (VALORRECEITA.length - 1))];

  return {
    id: id.toString(),
    nome: nome,
    valor: (Math.round(Math.random() * 1999).toString() + ',00'),
    // tConta:tConta,
    // banco:banco,
    situacao:true,
  };
}