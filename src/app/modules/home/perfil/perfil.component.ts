import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  email: string;

  constructor(public storage: StorageService) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.email = localUser.email;
    }
  }

}
