import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customer/customers.component';
import { CustomerService } from './customer/customer.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent
    ],
     providers: [
       CustomerService
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
