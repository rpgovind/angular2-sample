import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import {Customer}  from './customer.component';

@Component({
    moduleId : module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
   customers : Customer [];
    constructor(private _customerService : CustomerService) { }
    ngOnInit() {
          this._customerService.getCustomers().then(customers =>  this.customers = customers);
    }
}
