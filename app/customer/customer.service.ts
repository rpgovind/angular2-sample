import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import {Customer}  from './customer.component';
const URL_CUSTOMERS = 'app/customer/customers.json';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CustomerService {
    _customers : Customer[];
    getCustomers ():  Promise <Customer[]>  {
       return this._http.get(URL_CUSTOMERS)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    constructor(private _http : Http) { }
}
