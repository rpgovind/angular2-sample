import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    _customers : any;
    getCustomers () {
        this.  _customers = [
            {id : 101, name : 'Ramesh'},
            {id : 101, name : 'Linta'},
            {id : 101, name : 'Donald'},
            {id : 101, name : 'Ishan'},
        ];
        return this._customers;
    }

    constructor() { }
}
