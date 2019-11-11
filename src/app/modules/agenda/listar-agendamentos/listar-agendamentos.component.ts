import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.scss']
})
export class ListarAgendamentosComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; // important!


  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];

  addEvent() {
    this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      title: 'event 2', date: '2019-04-02'
    }
    );
  }

  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }
  
  constructor() { }

  ngOnInit() {

  }

}
