import { Component, OnInit, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit {

  isDentist: boolean;

  constructor() { }

  ngOnInit() {
    this.isDentist = false;
  }
  isWorkerDentist() {
    if (this.isDentist) {
      this.isDentist = false;
    } else {
      this.isDentist = true;
    }
  }


}
