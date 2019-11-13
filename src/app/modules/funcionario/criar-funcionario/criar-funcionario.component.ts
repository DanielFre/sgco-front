import { Component, OnInit, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit {

  isDentist: boolean;
  hasUser: boolean;

  constructor() { }

  ngOnInit() {
    this.isDentist = false;
    this.hasUser = false;
  }

  isWorkerDentist() {
    this.isDentist = !this.isDentist;
  }
  isWorkerUser(){
    this.hasUser = ! this.hasUser;
  }


}
