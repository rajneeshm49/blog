import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
	'selector': 'login',
	'templateUrl': './templates/login.html'
})

export class LoginComponent {
	login = {"username": "", "password": ""};
	private response;
	private errorMsg;

	constructor(private loginService: LoginService, private router: Router){}
	
	onSubmit() {
		this.loginService.passLoginDetails(this.login).subscribe(val => {

			this.response = val;
			
      if(this.response.success == 1) {
      	//assign the returned value to session variable in local storage
      	localStorage.setItem('session', JSON.stringify(this.response));
      	this.router.navigate(['/home']);
      } else {
      	this.errorMsg = 'Username or password did not match';
      }
    },
    err => {
      console.log('Something went wrong!');
    }
    );
	}
}