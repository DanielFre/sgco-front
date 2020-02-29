import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { EmailDTO } from 'app/core/models/email.dto';
import { SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { StorageService } from 'app/core/services/storage.service';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

	cred: EmailDTO = {
		email: ""
	}

	constructor(
		private router: Router,
		private auth: AuthService,
		private storage: StorageService) { }

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

	forgot() {
		this.auth.forgot(this.cred)
			.subscribe(
				response => {
					let options = {
						title: "Sucesso",
						text: "Uma nova senha foi enviada para seu email",
						type: "success"
					} as SweetAlertOptions;

					this.dialog.update(options);
					this.dialog.fire();
				},
				error => {
					let options = {
						title: "Erro " + error.status +  ((error.error) ? ": " + error.error : ""),
						text: (error.message) ? error.message : error.msg,
					} as SweetAlertOptions;

					this.dialog.update(options);
					this.dialog.fire();
				}
			);
	}

	redirecionar() {
		if (this.dialog.type == "success") {
			this.router.navigateByUrl('/login');
		}
	}

}
