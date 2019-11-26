import { Component, OnInit, ViewChild } from '@angular/core';
import { EventInput, OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import listPlugin from '@fullcalendar/list';
import { FuncionarioService } from 'app/core/services/domain/funcionario.service';
import Swal from 'sweetalert2';
import Popover from '@fullcalendar/daygrid/Popover';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';
import { FuncionarioDTO } from 'app/core/models/funcionario.dto';
import momentPlugin, { toMoment, toDuration } from '@fullcalendar/moment';


@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.scss']
})
export class CriarAgendamentoComponent implements OnInit {


  formGroup: FormGroup;
  procedimentos: ProcedimentoDTO[];
  funcionarios: FuncionarioDTO[];

  constructor(private router: Router, public formBuilder: FormBuilder, private procedimentoService: ProcedimentoService
  ) {
    this.formGroup = this.formBuilder.group({
      nomeDentista: [null],
      nomePaciente:[null],
      dataHoraInicio:[null],
      dataHoraFim:[null],
      observacao:[null],
      procedimento:[null]
    });
  }

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar', { static: false }) fullcalendar: FullCalendarComponent;
  ngOnInit() {

    this.procedimentoService.findAll()
      .subscribe(
        response => {
          this.procedimentos = response;
        },
        error => { });

    this.options = {
      editable: true,
      navLinks: true,
      locale: 'pt-br',
      selectable:true,
      defaultView: 'timeGridWeek',
      allDayText: 'Todo dia',
      slotLabelInterval: '00:15',
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        omitZeroMinute: false,
        meridiem: 'short'
      },
      slotDuration: '00:15:00',
      buttonText: {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista'
      },
      header: {
        left: 'today, prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,dayGridMonth',
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGrigPlugin, momentPlugin]
    };
  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(arg) {
    let m = toMoment(arg.date,this.fullcalendar.getApi());
    this.formGroup.controls.dataHoraInicio.setValue(m.format('D MMMM - YYYY, HH:mm'));    
    this.formGroup.controls.dataHoraFim.setValue(m.format('D MMMM - YYYY, HH:mm'));
  }

}
