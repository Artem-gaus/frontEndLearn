import { DataSevice } from './data.sevsice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CheckComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'app-check', component: CheckComponent},
      { path: 'product', component: ProductComponent }
    ])
  ],
  providers: [
    DataSevice
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }