import { Component } from '@angular/core';

@Component({
	selector: 'create-blog',
	templateUrl: './templates/create-blog.html'
})

export class CreateBlogComponent {
private content;
blog = {"title":"", "content":""}
	constructor() {
		 this.content = '<p>Hello <strong>World !</strong></p>';
	}
}