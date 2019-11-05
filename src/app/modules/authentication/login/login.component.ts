import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'app/core/models/credenciais.dto';
import { AuthService } from 'app/core/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	creds: CredenciaisDTO = {
		email: "geovaninieswald@gmail.com",
		senha: "123"
	}

	constructor(
		private router: Router,
		private auth: AuthService) {
	}

	ngOnInit() {
	}

	public login() {
		this.auth.authenticate(this.creds)
			.subscribe(
				response => {
					this.auth.successfulLogin(response.headers.get('Authorization'));
					this.router.navigateByUrl('/home');
				},
				error => { }
			);
	}

}
