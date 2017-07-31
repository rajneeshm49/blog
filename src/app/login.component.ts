import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	'selector': 'login',
	'templateUrl': './templates/login.html'
})

export class LoginComponent {
	login = {"username1": "", "password1": ""};
	private response;

	constructor(private loginService: LoginService){}
	
	onSubmit() {
		this.response = this.loginService.passLoginDetails(this.login).subscribe(val => console.log(val));
	}
}