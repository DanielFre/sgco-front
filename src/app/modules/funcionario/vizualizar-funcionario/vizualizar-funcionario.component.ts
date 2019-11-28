import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vizualizar-funcionario',
  templateUrl: './vizualizar-funcionario.component.html',
  styleUrls: ['./vizualizar-funcionario.component.scss']
})
export class VizualizarFuncionarioComponent implements OnInit {

  public userId;

  constructor( private route: ActivatedRoute ) {
      this.route.params.subscribe(params => this.userId = params['id']);
      console.log(this.userId);
  }

  ngOnInit() {
  }

}
