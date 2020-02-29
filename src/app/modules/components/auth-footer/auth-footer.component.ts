import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-auth-footer',
	templateUrl: './auth-footer.component.html',
	styleUrls: ['./auth-footer.component.scss']
})
export class AuthFooterComponent implements OnInit {

	test: Date = new Date();

	constructor() { }

	ngOnInit() {
	}

}
