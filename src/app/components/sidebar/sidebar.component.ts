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
  { path: '/procedimento', title: 'Procedimentos', icon: 'content_paste', class: '', type: 'link', children:null },
  { path: '/agenda', title: 'Agenda', icon: 'schedule', class: '', type: 'link', children: null},
  { path: '/funcionario', title: 'Funcionários', icon: 'person', class: '', type: 'link', children: null},
  { path: '/paciente', title: 'Pacientes', icon: 'people', class: '', type: 'link', children: null},
  { path: '/dashboard', title: 'Financeiro', icon: 'monetization_on', class: '', type: 'sub', children: [{ path: '/funcionario', ab: 'C', title: 'Conta' },{ path: '/funcionario', ab: 'D', title: 'Despesas' },{ path: '/funcionario', ab: 'R', title: 'Receitas' }] },
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
