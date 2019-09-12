import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  type: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tela Principal', icon: 'dashboard', class: '', type: 'link' },
  { path: '/procedimento', title: 'Procedimentos', icon: 'person', class: '', type: 'link' },
  { path: '/agenda', title: 'Agenda', icon: 'content_paste', class: '', type: 'link' },
  { path: '/funcionario', title: 'Funcionários', icon: 'library_books', class: '', type: 'link' },
  { path: '/dashboard', title: 'Financeiro', icon: 'bubble_chart', class: '', type: 'sub' },
  { path: '/paciente', title: 'Pacientes', icon: 'location_on', class: '', type: 'link' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
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
