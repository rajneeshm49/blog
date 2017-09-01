import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	'selector': 'login',
	'templateUrl': './templates/login.html'
})

export class LoginComponent {
	login = {"username": "", "password": ""};
	private response;

	constructor(private loginService: LoginService){}
	
	onSubmit() {
		console.log(this.login);
		this.response = this.loginService.passLoginDetails(this.login).subscribe(val => console.log(val));
		console.log(this.response);
	}
}