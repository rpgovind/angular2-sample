import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
            {id : 101, name : 'Ramesh'},
            {id : 101, name : 'Linta'},
            {id : 101, name : 'Donald'},
            {id : 101, name : 'Ishan'},
        ];
    constructor() { }
    ngOnInit() { }
}