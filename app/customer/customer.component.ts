import { Component , Input , OnInit} from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
 @Input()   customer: Customer; //{id: number, name: string };
    constructor () {

    }
    ngOnInit() { }
}

export class  Customer  {
    id: number;
    name1: number;
    address : string;
}
