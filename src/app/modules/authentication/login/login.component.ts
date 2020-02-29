import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CredenciaisDTO } from 'app/core/models/credenciais.dto';
import { AuthService } from 'app/core/services/auth.service';
import { SweetAlertOptions } from 'sweetalert2';
import { StorageService } from 'app/core/services/storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	creds: CredenciaisDTO = {
		email: "",
		senha: ""
	}

	constructor(
		private router: Router,
		private auth: AuthService,
		private storage: StorageService) {
	}

	ngOnInit() {
		let localUser = this.storage.getLocalUser();

		if (localUser && localUser.email) {
			this.auth.refreshToken()
				.subscribe(
					response => {
						this.auth.successfulLogin(response.headers.get('Authorization'));
						this.router.navigateByUrl('/home');
					},
					error => { }
				);
		}
	}

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	public login() {
		this.auth.authenticate(this.creds)
			.subscribe(
				response => {
					this.auth.successfulLogin(response.headers.get('Authorization'));
					this.router.navigateByUrl('/home');
				},
				error => {
					switch (error.status) {
						case 401:
							this.dialog.fire();
							break;
						default:
							let options = {
								title: "Erro " + error.status +  ((error.error) ? ": " + error.error : ""),
								text: (error.message) ? error.message : error.msg,
							} as SweetAlertOptions;

							this.dialog.update(options);
							this.dialog.fire();
					}
				}
			);
	}

}
