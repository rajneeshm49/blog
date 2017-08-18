import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	'selector': 'login',
	'templateUrl': './templates/login.html'
})

export class LoginComponent {
	login = {"username": "", "password": ""};
	private response: string[];

	constructor(private loginService: LoginService){}
	
	onSubmit() {
		this.loginService.passLoginDetails(this.login).subscribe(val => {
      this.response = val;
    },
    err => {
      console.log('Something went wrong!');
    });
	}
}