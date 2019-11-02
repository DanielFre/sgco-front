import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'app/core/models/credenciais.dto';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login() {
    console.log(this.creds);
    this.router.navigateByUrl('/home');
  }

}
