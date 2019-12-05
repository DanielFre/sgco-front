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
import { AgendamentoService } from 'app/core/services/domain/agendamento.service';
import { AgendamentoDTO } from 'app/core/models/agendamento.dto';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.scss']
})
export class ListarAgendamentosComponent implements OnInit {

  constructor(private router: Router) {

  }

  agendamentos: AgendamentoDTO[];
  options: OptionsInput;
  eventsModel: any;
  calendarEvents = {};
  @ViewChild('fullcalendar', { static: false }) fullcalendar: FullCalendarComponent;
  ngOnInit() {

    this.options = {
      editable: true,
      navLinks: true,
      locale: 'pt-br',
      slotDuration: '00:15:00',
      buttonText: {
        next: 'Proximo',
        prev: 'Anterior',
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista'
      },
      customButtons: {
        myCustomButton: {
          text: 'Novo Agendamento', click: () => {
            this.router.navigateByUrl('agenda/cadastrar');
          }
        }
      },
      header: {
        left: 'prev,next, today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGrigPlugin, listPlugin]
    };
  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.calendarEvents = this.agendamentos;
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}

