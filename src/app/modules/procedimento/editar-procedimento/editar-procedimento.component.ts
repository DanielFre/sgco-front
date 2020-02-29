import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-editar-procedimento',
  templateUrl: './editar-procedimento.component.html',
  styleUrls: ['./editar-procedimento.component.scss']
})
export class EditarProcedimentoComponent implements OnInit {

  procedimentos: ProcedimentoDTO[];
  formGroup: FormGroup;
  procedimento: any;
  constructor(public formBuilder: FormBuilder, private procedimentoService: ProcedimentoService, private router: Router, private route: ActivatedRoute) {

  }

  @ViewChild('dialog', null)
  private dialog: SwalComponent;

  private id;

  ngOnInit() {
    this.id = (this.route.snapshot.params['id']);
    
    this.procedimentoService.findById(this.id).subscribe(
      response => {
        this.procedimento = response;

        this.formGroup = this.formBuilder.group({
          nome: [this.procedimento.nome, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
          valor: [this.procedimento.valor, [Validators.required]],
          ativo: [this.procedimento.ativo]
        });
      }, error =>{
        console.log(error);
      })
  }

  atualizar() {
    let aux = this.formGroup.value;

    let procedimento: ProcedimentoDTO = {
      id: this.id,
      nome: aux.nome,
      valor: aux.valor,
      ativo: aux.ativo
    };

    this.procedimentoService.update(procedimento, procedimento.id)
      .subscribe(response => {
        let options = {
          title: "Sucesso!",
          text: "Procedimento " + procedimento.nome + " foi adicionado com sucesso!",
          type: 'success',
        } as SweetAlertOptions;

        this.dialog.update(options);
        this.router.navigateByUrl('procedimentos/listar');
        this.dialog.fire();

      }, error => {
        switch (error.status) {
          case 401:
            break;
          default:
            let options = {
              title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
              text: (error.message) ? error.message : error.msg,
              type: 'error'
            } as SweetAlertOptions;

            this.dialog.update(options);
            this.dialog.fire();
        }

      });


  }
}
