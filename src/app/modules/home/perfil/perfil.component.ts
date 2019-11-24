import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { StorageService } from 'app/core/services/storage.service';
import { UsuarioPerfilDTO } from 'app/core/models/usuario-perfil.dto';
import { UsuarioService } from 'app/core/services/domain/usuario.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AlterarSenhaDTO } from 'app/core/models/alterar-senha.dto';
import { AlterarImagemDTO } from 'app/core/models/alterar-imagem.dto';

class ImageSnippet {
	pending: boolean = false;
	status: string = 'init';

	constructor(public src: string, public file: File) { }
}

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	usuario: UsuarioPerfilDTO;
	imageToShow: any;

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	@ViewChild('cardProfile', null)
	private cardProfile: ElementRef;

	constructor(
		private router: Router,
		public storage: StorageService,
		public usuarioService: UsuarioService,
		public dialogModal: MatDialog
	) { }

	ngOnInit() {
		let localUser = this.storage.getLocalUser();

		this.usuarioService.findPerfil(localUser.email)
			.subscribe(
				response => {
					this.usuario = response;

					if (this.usuario.crmCro) {
						this.usuario.tipo += " - CRM/CRO " + this.usuario.crmCro;
					}

					if (this.usuario.imagem) {
						this.usuarioService.downloadImage(this.usuario.imagem)
							.subscribe(response => {
								this.createImageFromBlob(response);
							},
								error => { }
							);
					}
				},
				error => {
					switch (error.status) {
						case 403:
							this.dialog.fire();
							break;
						default:
							let options = {
								title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
								text: (error.message) ? error.message : error.msg,
								type: "error"
							} as SweetAlertOptions;

							this.dialog.update(options);
							this.dialog.fire();
					}

					this.redirecionar();
				}
			);
	}

	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.imageToShow = reader.result;
		}, false);

		if (image) {
			reader.readAsDataURL(image);
		}
	}

	public redirecionar() {
		this.router.navigateByUrl('/home');
	}

	openAlterarSenha(): void {
		let sizeCard = this.cardProfile.nativeElement.offsetWidth;

		const dialogRef = this.dialogModal.open(AlterarSenhaModal, {
			width: sizeCard + 'px',
			data: { email: this.usuario.email, nova: "", confirmacao: "", antiga: "" }
		});
	}

	openAlterarImagem(): void {
		let sizeCard = this.cardProfile.nativeElement.offsetWidth;

		const dialogRef = this.dialogModal.open(AlterarImagemModal, {
			width: sizeCard + 'px',
			data: { email: this.usuario.email, imagem: "" }
		});
	}
}

@Component({
	selector: 'alterar-senha',
	templateUrl: './alterar-senha.modal.html',
	styleUrls: ['./perfil.component.scss']
})
export class AlterarSenhaModal {

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	constructor(
		public dialogRef: MatDialogRef<AlterarSenhaModal>,
		@Inject(MAT_DIALOG_DATA) public alterarSenha: AlterarSenhaDTO,
		public usuarioService: UsuarioService
	) { }

	alterarS(): void {
		if (this.alterarSenha.nova == this.alterarSenha.confirmacao) {
			this.usuarioService.alterarSenha(this.alterarSenha)
				.subscribe(response => {
					let options = {
						title: "Sucesso",
						text: "Senha alterada",
						type: "success"
					} as SweetAlertOptions;

					this.dialog.update(options);
					this.dialog.fire();
				},
					error => {
						let options = {
							title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
							text: (error.message) ? error.message : error.msg,
							type: "error"
						} as SweetAlertOptions;

						this.dialog.update(options);
						this.dialog.fire();
					}
				);
		} else {
			let options = {
				title: "Erro ",
				text: "Nova senha e senha de confirmação não são iguais",
				type: "error"
			} as SweetAlertOptions;

			this.dialog.update(options);
			this.dialog.fire();
		}
	}

	redirecionar() {
		if (this.dialog.type == "success") {
			this.dialogRef.close();
		}
	}
}

@Component({
	selector: 'alterar-imagem',
	templateUrl: './alterar-imagem.modal.html',
	styleUrls: ['./perfil.component.scss']
})
export class AlterarImagemModal {

	selectedFile: ImageSnippet;

	@ViewChild('dialog', null)
	private dialog: SwalComponent;

	constructor(
		public dialogRef: MatDialogRef<AlterarImagemModal>,
		@Inject(MAT_DIALOG_DATA) public alterarImagem: AlterarImagemDTO,
		public usuarioService: UsuarioService
	) { }

	processFile(imageInput: any) {
		const file: File = imageInput.files[0];
		const reader = new FileReader();

		reader.addEventListener('load', (event: any) => {
			this.selectedFile = new ImageSnippet(event.target.result, file);

			this.selectedFile.pending = true;
			this.usuarioService.uploadImage(this.selectedFile.file)
				.subscribe(response => {
					let body: any = response.body;

					this.onSuccess(body.fileName);
				},
					error => {
						this.onError();
					}
				);
		});

		reader.readAsDataURL(file);
	}

	private onSuccess(fileName: string) {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'ok';
		this.alterarImagem.imagem = fileName;
	}

	private onError() {
		this.selectedFile.pending = false;
		this.selectedFile.status = 'fail';
		this.selectedFile.src = '';
	}

	alterarI(): void {
		this.usuarioService.alterarImagem(this.alterarImagem)
			.subscribe(response => {
				let options = {
					title: "Sucesso",
					text: "Imagem alterada",
					type: "success"
				} as SweetAlertOptions;

				this.dialog.update(options);
				this.dialog.fire();
			},
				error => {
					let options = {
						title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
						text: (error.message) ? error.message : error.msg,
						type: "error"
					} as SweetAlertOptions;

					this.dialog.update(options);
					this.dialog.fire();
				}
			);
	}

	redirecionar() {
		if (this.dialog.type == "success") {
			this.dialogRef.close();
			window.location.reload();
		}
	}

}