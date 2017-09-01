import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import Rxjs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

	private blogApiUrl = 'http://localhost/blog/blog-api/login';
	
	constructor(private http: Http) {}

	passLoginDetails(formData: Object):Observable<any[]> {
		
		let bodyString = JSON.stringify(formData);
		let headers      = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' });
		let options       = new RequestOptions({ headers: headers });
		return this.http.post(this.blogApiUrl, formData, options)
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}