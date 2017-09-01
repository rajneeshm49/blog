import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import Rxjs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

<<<<<<< HEAD
	private blogApiUrl = 'http://localhost/blog/blog-api/login';
	
=======
	private blogApiUrl = 'http://localhost/ex/ex1.php';

>>>>>>> 85c61aaa3cc5a58341fa2374612e8861d5a533af
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