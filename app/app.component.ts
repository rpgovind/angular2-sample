import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html',
  
})
export class AppComponent {
    title = 'Customer APP';
    name = 'Ramesh';
    rameshColor = 'red';
     customers = [
        {id : 101, name : 'Ramesh'},
        {id : 101, name : 'Linta'},
        {id : 101, name : 'Donald'},
        {id : 101, name : 'Ishan'},
    ];
    changeColor () {
        this.rameshColor = (this.rameshColor === 'red') ? 'green' : 'red';
    };
 }
