import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface Child {
  path: string;
  title: string;
  ab: string;
}
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  type: string;
  children: Child[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tela Principal', icon: 'dashboard', class: '', type: 'link', children: null },
  { path: '/procedimento', title: 'Procedimentos', icon: 'person', class: '', type: 'link', children: null },
  { path: '/agenda', title: 'Agenda', icon: 'content_paste', class: '', type: 'link', children: null },
  { path: '/funcionario', title: 'Funcionários', icon: 'library_books', class: '', type: 'link', children: null },
  { path: '/dashboard', title: 'Financeiro', icon: 'bubble_chart', class: '', type: 'sub', children: [{ path: '/funcionario', ab: 'library_books', title: 'ASSASA' }] },
  { path: '/paciente', title: 'Pacientes', icon: 'location_on', class: '', type: 'link', children: null },
  //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '',type: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
