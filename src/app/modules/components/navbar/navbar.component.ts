import { Component, OnInit, ElementRef, ɵConsole } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

declare interface Navegacao {
    path: string;
    title: string;
}
declare interface TitleInfo {
    path: string;
    title: string;
}

const TITLES: TitleInfo[] = [
    { path: '/home', title: 'Tela Principal' },
    { path: '/home/dashboard', title: 'Tela Principal' },
    { path: '/home/perfil', title: 'Perfil' },

    { path: '/procedimentos', title: 'Procedimentos' },
    { path: '/procedimentos/listar', title: 'Procedimentos' },
    { path: '/procedimentos/cadastrar', title: 'Cadastrar' },

    { path: '/agenda', title: 'Agenda' },
    { path: '/agenda/listar', title: 'Agenda' },
    { path: '/agenda/cadastrar', title: 'Agendar' },

    { path: '/pacientes', title: 'Pacientes' },
    { path: '/pacientes/listar', title: 'Pacientes' },
    { path: '/pacientes/cadastrar', title: 'Cadastrar' },

    { path: '/funcionarios', title: 'Funcionários' },
    { path: '/funcionarios/listar', title: 'Funcionários' },
    { path: '/funcionarios/cadastrar', title: 'Cadastrar' },

    { path: '/financeiro', title: 'Financeiro' },

    { path: '/financeiro/contas', title: 'Contas' },
    { path: '/financeiro/contas/listar', title: 'Contas' },
    { path: '/financeiro/contas/cadastrar', title: 'Cadastrar' },

    { path: '/financeiro/despesas', title: 'Despesas' },
    { path: '/financeiro/despesas/listar', title: 'Despesas' },
    { path: '/financeiro/despesas/cadastrar', title: 'Cadastrar' },

    { path: '/financeiro/receitas', title: 'Receitas' },
    { path: '/financeiro/receitas/listar', title: 'Receitas' },
    { path: '/financeiro/receitas/cadastrar', title: 'Cadastrar' },
];

const EXCLUDED: string[] = [
    "/home/dashboard", "/procedimentos/listar", "/agenda/listar", "/pacientes/listar", "/funcionarios/listar",
    "/financeiro/contas/listar", "/financeiro/despesas/listar", "/financeiro/receitas/listar"
]

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    private listNavegacao: Navegacao[];

    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location, private element: ElementRef, private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = TITLES.filter(listTitle => listTitle);
        this.listNavegacao = this.getNavegacao();

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.listNavegacao = this.getNavegacao();
            this.sidebarClose();
            var $layer: any = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function () { //asign a function
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };

    getTitle(url: string) {
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === url) {
                return this.listTitles[item].title;
            }
        }

        return '';
    }

    getNavegacao(): Navegacao[] {
        var navegacao: Navegacao[] = [];
        var urlCompleta: string = "";

        var url = this.location.prepareExternalUrl(this.location.path());

        url = url.substring(1);

        var urls: string[] = url.split("/");

        urls.forEach(url => {
            urlCompleta += "/" + url;

            if (EXCLUDED.indexOf(urlCompleta) == -1) {
                let nav: Navegacao = { path: urlCompleta, title: this.getTitle(urlCompleta) };
                navegacao.push(nav);
            }
        });

        return navegacao;
    }
}
