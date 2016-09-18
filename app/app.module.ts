import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customer/customers.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
