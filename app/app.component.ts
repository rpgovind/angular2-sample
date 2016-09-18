import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html',

})
export class AppComponent {
    title = 'Customer APP';
    name = 'Ramesh';
    rameshColor = 'red';
    changeColor () {
        this.rameshColor = (this.rameshColor === 'red') ? 'green' : 'red';
    };
 }
