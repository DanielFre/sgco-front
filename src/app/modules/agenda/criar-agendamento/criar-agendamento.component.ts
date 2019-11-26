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
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';

@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.scss']
})
export class CriarAgendamentoComponent implements OnInit {


  formGroup: FormGroup;
  items: ProcedimentoDTO[];

  constructor(private router: Router, public formBuilder: FormBuilder, private procedimentoService: ProcedimentoService) {

  }

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar', { static: false }) fullcalendar: FullCalendarComponent;
  ngOnInit() {

    this.procedimentoService.findAll()
      .subscribe(
        response => {
          this.items = response;
        },
        error => { });

    this.options = {
      editable: true,
      navLinks: true,
      locale: 'pt-br',
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
      plugins: [dayGridPlugin, interactionPlugin, timeGrigPlugin]
    };

  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(arg) {

  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }

}
