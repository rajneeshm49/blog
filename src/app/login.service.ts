import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import Rxjs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

	private blogApiUrl = 'http://localhost/blog-api/blog-rest-api.php';

	constructor(private http: Http) {}

	passLoginDetails(formData: Object) {
		let bodyString = JSON.stringify(formData);

		return this.http.post(this.blogApiUrl, formData)
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}