import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './templates/header.html' 
})

export class HeaderComponent {
	private sess;
	constructor() {
		let session = localStorage.getItem('session');
		this.sess = JSON.parse(session);
	}
}