import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  login(form:NgForm){
    if(form.value.usuario="usuario1"){
      if(form.value.contraseña="1234"){
        window.location.href="/paneladmin";
      }
    }
  }
}
