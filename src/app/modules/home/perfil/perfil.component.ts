import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/services/storage.service';
import { UsuarioPerfilDTO } from 'app/core/models/usuario-perfil.dto';
import { UsuarioService } from 'app/core/services/domain/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioPerfilDTO;

  constructor(
    public storage: StorageService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.usuarioService.findPerfil(localUser.email)
        .subscribe(
          response => {
            this.usuario = response;
            //buscar imagem
          },
          error => { }
        );
    }
  }

}
