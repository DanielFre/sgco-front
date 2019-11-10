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
	{ path: '/home', title: 'Tela Principal', icon: 'dashboard', class: '', type: 'link', children: null },
	{ path: '/procedimentos', title: 'Procedimentos', icon: 'content_paste', class: '', type: 'link', children: null },
	{ path: '/agenda', title: 'Agenda', icon: 'schedule', class: '', type: 'link', children: null },
	{ path: '/funcionarios', title: 'Funcionários', icon: 'person', class: '', type: 'link', children: null },
	{ path: '/pacientes', title: 'Pacientes', icon: 'people', class: '', type: 'link', children: null },

	{ path: '/financeiro', title: 'Financeiro', icon: 'monetization_on', class: '', type: 'sub', children: [{ path: 'contas', ab: 'C', title: 'Conta' }, { path: 'despesas', ab: 'D', title: 'Despesas' }, { path: 'receitas', ab: 'R', title: 'Receitas' }] }
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
