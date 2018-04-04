import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Password } from './password';

@Injectable()
export class PasswordService {
    url = "api/passwords";
    constructor(private http:Http) { }
    getPasswordsWithObservable(): Observable<Password[]> {
        return this.http.get(this.url)
		   .map(this.extractData)
		   .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
        let body = res.json();
            return body || {};
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
} 